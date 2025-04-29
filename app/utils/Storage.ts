import { MMKV } from "react-native-mmkv";

// Define storage keys as a type to ensure consistency
export const enum StorageKey {
  USER_TOKEN = "user_token",
  USER_PROFILE = "user_profile",
  APP_THEME = "app_theme",
  ONBOARDING_COMPLETED = "onboarding_completed",
  LAST_SYNC_TIME = "last_sync_time",
  NOTIFICATION_SETTINGS = "notification_settings",
  APP_LANGUAGE = "app_language",
  CACHED_DATA = "cached_data",
}

// Define types for stored values
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  createdAt: string;
}

export interface NotificationSettings {
  pushEnabled: boolean;
  emailEnabled: boolean;
  marketingEnabled: boolean;
  reminderTime?: string;
}

// Initialize storage
export const storage = new MMKV();

/**
 * Type-safe storage utility functions
 */
export const StorageUtils = {
  /**
   * Store a string value
   */
  setString: (key: StorageKey, value: string): void => {
    storage.set(key, value);
  },

  /**
   * Get a string value
   */
  getString: (key: StorageKey): string | undefined => {
    return storage.getString(key);
  },

  /**
   * Store a number value
   */
  setNumber: (key: StorageKey, value: number): void => {
    storage.set(key, value);
  },

  /**
   * Get a number value
   */
  getNumber: (key: StorageKey): number | undefined => {
    return storage.getNumber(key);
  },

  /**
   * Store a boolean value
   */
  setBoolean: (key: StorageKey, value: boolean): void => {
    storage.set(key, value);
  },

  /**
   * Get a boolean value
   */
  getBoolean: (key: StorageKey, defaultValue: boolean = false): boolean => {
    return storage.getBoolean(key) ?? defaultValue;
  },

  /**
   * Store an object value (serialized as JSON)
   */
  setObject: <T>(key: StorageKey, value: T): void => {
    storage.set(key, JSON.stringify(value));
  },

  /**
   * Get an object value (parsed from JSON)
   */
  getObject: <T>(key: StorageKey): T | null => {
    const value = storage.getString(key);
    if (value) {
      try {
        return JSON.parse(value) as T;
      } catch (error) {
        console.error(`Error parsing stored object for key ${key}:`, error);
      }
    }
    return null;
  },

  /**
   * Remove a value from storage
   */
  remove: (key: StorageKey): void => {
    storage.delete(key);
  },

  /**
   * Clear all stored values
   */
  clearAll: (): void => {
    storage.clearAll();
  },

  /**
   * Check if a key exists in storage
   */
  hasKey: (key: StorageKey): boolean => {
    return storage.contains(key);
  },

  /**
   * Get all keys in storage
   */
  getAllKeys: (): string[] => {
    return storage.getAllKeys();
  },

  // Specialized helper functions for common operations

  /**
   * Save user token
   */
  saveUserToken: (token: string): void => {
    StorageUtils.setString(StorageKey.USER_TOKEN, token);
  },

  /**
   * Get user token
   */
  getUserToken: (): string | undefined => {
    return StorageUtils.getString(StorageKey.USER_TOKEN);
  },

  /**
   * Save user profile
   */
  saveUserProfile: (profile: UserProfile): void => {
    StorageUtils.setObject<UserProfile>(StorageKey.USER_PROFILE, profile);
  },

  /**
   * Get user profile
   */
  getUserProfile: (): UserProfile | null => {
    return StorageUtils.getObject<UserProfile>(StorageKey.USER_PROFILE);
  },

  /**
   * Save app theme preference
   */
  saveThemePreference: (isDarkMode: boolean): void => {
    StorageUtils.setBoolean(StorageKey.APP_THEME, isDarkMode);
  },

  /**
   * Get app theme preference
   */
  getThemePreference: (): boolean => {
    return StorageUtils.getBoolean(StorageKey.APP_THEME, false);
  },

  /**
   * Save onboarding completion status
   */
  setOnboardingCompleted: (completed: boolean): void => {
    StorageUtils.setBoolean(StorageKey.ONBOARDING_COMPLETED, completed);
  },

  /**
   * Check if onboarding is completed
   */
  isOnboardingCompleted: (): boolean => {
    return StorageUtils.getBoolean(StorageKey.ONBOARDING_COMPLETED, false);
  },

  /**
   * Save notification settings
   */
  saveNotificationSettings: (settings: NotificationSettings): void => {
    StorageUtils.setObject<NotificationSettings>(
      StorageKey.NOTIFICATION_SETTINGS,
      settings
    );
  },

  /**
   * Get notification settings
   */
  getNotificationSettings: (): NotificationSettings | null => {
    return StorageUtils.getObject<NotificationSettings>(
      StorageKey.NOTIFICATION_SETTINGS
    );
  },

  /**
   * Save last sync time
   */
  saveLastSyncTime: (timestamp: number): void => {
    StorageUtils.setNumber(StorageKey.LAST_SYNC_TIME, timestamp);
  },

  /**
   * Get last sync time
   */
  getLastSyncTime: (): number | undefined => {
    return StorageUtils.getNumber(StorageKey.LAST_SYNC_TIME);
  },
};
