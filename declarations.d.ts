declare module "*.css" {//Tells TypeScript that when you import any .css file, it will export a string as the default export.
  const content: string;
  export default content;
}

declare module "*?inline" {
  const src: string;
  export default src;
}

declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}
