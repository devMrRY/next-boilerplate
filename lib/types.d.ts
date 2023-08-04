// Property 'amp-img' does not exist on type 'JSX.IntrinsicElements'.
export declare global {
  namespace JSX {
    interface AmpImg {
      alt: string;
      src: string;
      width?: string;
      height?: string;
      layout?: string;
    }
    interface IntrinsicElements {
      "amp-img": AmpImg;
    }
  }
}
