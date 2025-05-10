import { MMKV } from "react-native-mmkv";

// Define storage keys as a type to ensure consistency
export const enum StorageKey {
  AUTH_STATE = "auth_state",
  APP_THEME = "app_theme",
}

// Initialize storage
export const storage = new MMKV();

/**
 * Simplified storage utility functions
 */
export const StorageUtils = {
  /**
   * Set a value (string, number, boolean, or object)
   */
  set: <T>(key: StorageKey, value: T): void => {
    const data = typeof value === "object" ? JSON.stringify(value) : value;
    storage.set(key, data as string | number | boolean);
  },

  /**
   * Get a value (string, number, boolean, or object)
   */
  get: <T>(key: StorageKey): T | null => {
    const value =
      storage.getString(key) ??
      storage.getNumber(key) ??
      storage.getBoolean(key);
    if (typeof value === "string") {
      try {
        return JSON.parse(value) as T;
      } catch {
        return value as T;
      }
    }
    return value as T | null;
  },

  /**
   * Delete a value
   */
  delete: (key: StorageKey): void => {
    storage.delete(key);
  },

  /**
   * Clear all stored values
   */
  clean: (): void => {
    storage.clearAll();
  },
};
