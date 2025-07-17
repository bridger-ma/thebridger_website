export interface Asset3D {
  id: string;
  path: string;
  type: 'model' | 'texture' | 'shader';
  size: number;
  lodLevels?: string[];
  preload: boolean;
}

export interface AssetRegistry {
  assets: Asset3D[];
  loaded: string[];
  failed: string[];
  priorityQueue: string[];
}

export const assetRegistry: AssetRegistry = {
  assets: [],
  loaded: [],
  failed: [],
  priorityQueue: [],
}; 