import React, { createContext, useContext, useState, useEffect } from 'react';
import { MehndiCategoryId } from '../types';
import defaultLegMehndi from '../assets/images/leg_mehndi_bridal_1791461321019.jpg';

interface PhotoSlotData {
  [slotId: string]: string; // base64 or URL
}

const DEFAULT_PHOTOS: PhotoSlotData = {
  'leg-mehndi-bridal': defaultLegMehndi,
};

interface PhotoContextType {
  getPhoto: (slotId: string) => string | null;
  setPhoto: (slotId: string, dataUrl: string) => void;
  removePhoto: (slotId: string) => void;
  clearAllPhotos: () => void;
  isOwnerMode: boolean;
  setIsOwnerMode: (val: boolean) => void;
  activeUploadModalCategory: MehndiCategoryId | string | null;
  openUploadModal: (slotId?: string) => void;
  closeUploadModal: () => void;
}

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

const STORAGE_KEY = 'ansh_bridal_real_photos_v1';

// Utility to compress image to safe localStorage size (max ~1200px)
export function processImageFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 1200;
        const MAX_HEIGHT = 1200;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/jpeg', 0.85));
        } else {
          resolve(event.target?.result as string);
        }
      };
      img.onerror = (err) => reject(err);
    };
    reader.onerror = (err) => reject(err);
  });
}

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photos, setPhotos] = useState<PhotoSlotData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [isOwnerMode, setIsOwnerMode] = useState<boolean>(false);
  const [activeUploadModalCategory, setActiveUploadModalCategory] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(photos));
    } catch (e) {
      console.warn('LocalStorage limit reached for photos:', e);
    }
  }, [photos]);

  const getPhoto = (slotId: string): string | null => {
    return photos[slotId] || DEFAULT_PHOTOS[slotId] || null;
  };

  const setPhoto = (slotId: string, dataUrl: string) => {
    setPhotos((prev) => ({
      ...prev,
      [slotId]: dataUrl,
    }));
  };

  const removePhoto = (slotId: string) => {
    setPhotos((prev) => {
      const next = { ...prev };
      delete next[slotId];
      return next;
    });
  };

  const clearAllPhotos = () => {
    setPhotos({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error(e);
    }
  };

  const openUploadModal = (slotId?: string) => {
    setActiveUploadModalCategory(slotId || 'all');
  };

  const closeUploadModal = () => {
    setActiveUploadModalCategory(null);
  };

  return (
    <PhotoContext.Provider
      value={{
        getPhoto,
        setPhoto,
        removePhoto,
        clearAllPhotos,
        isOwnerMode,
        setIsOwnerMode,
        activeUploadModalCategory,
        openUploadModal,
        closeUploadModal,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhotos = () => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('usePhotos must be used within a PhotoProvider');
  }
  return context;
};
