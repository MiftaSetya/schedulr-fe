export interface Board {
  ID: number;
  name: string;
  owner_id: string;
}

export interface BoardRequest {
    name: string;
}