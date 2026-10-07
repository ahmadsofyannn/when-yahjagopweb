// Deklarasi untuk import CSS / CSS Modules
declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

// (Opsional) Deklarasi untuk import aset gambar jika dibutuhkan
declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  import React from "react";
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}