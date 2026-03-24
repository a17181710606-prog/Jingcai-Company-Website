declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare namespace React {
  type ReactNode = any;
}

declare module 'react' {
  export type ReactNode = any;
}

declare module 'next' {
  export type Metadata = any;
  export type NextConfig = any;
}

declare module 'next/link' {
  const Link: any;
  export default Link;
}

declare module 'next/server' {
  export type NextRequest = any;
  export class NextResponse {
    static redirect(url: URL | string): any;
    static next(): any;
    cookies: {
      set: (...args: any[]) => void;
      delete: (...args: any[]) => void;
    };
  }
}

declare module 'next/headers' {
  export function cookies(): Promise<{
    get: (name: string) => { value: string } | undefined;
  }>;
}

declare module '@supabase/supabase-js' {
  export function createClient(...args: any[]): any;
}

declare module '*.css';

declare const process: {
  env: Record<string, string | undefined>;
};
