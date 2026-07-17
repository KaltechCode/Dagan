class StorageService {
  get<T>(key: string): T | null {
    if (typeof window === "undefined") {
      return null;
    }

    try {
      const value = localStorage.getItem(key);

      if (!value) {
        return null;
      }

      return JSON.parse(value) as T;
    } catch {
      return null;
    }
  }

  set<T>(key: string, value: T) {
    if (typeof window === "undefined") {
      return;
    }

    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: string) {
    if (typeof window === "undefined") {
      return;
    }

    localStorage.removeItem(key);
  }

  clear() {
    if (typeof window === "undefined") {
      return;
    }

    localStorage.clear();
  }
}

export const storage = new StorageService();
