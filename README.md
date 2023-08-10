# Table of Content

<br/>

| Sl.No | Topics                                                                                                          |
| ----- | --------------------------------------------------------------------------------------------------------------- |
| \*    | [What is Next.js?](#q-what-is-nextjs-)                                                                          |
| \*    | [How it is better than React.js?](#q-how-it-is-better-than-reactjs-)                                            |
| \*    | [What is custom \_app](#q-what-is-custom-_app)                                                                  |
| \*    | [What is custom \_document](#q-what-is-custom-_document)                                                        |
| \*    | [What is custom \_error](#q-what-is-custom-_error)                                                              |
| \*    | [Diff between catch all and optional catch all routes](#q-diff-between-catch-all-and-optional-catch-all-routes) |
| \*    | [Data fetching methods in Next.js](#q-data-fetching-methods-in-nextjs)                                          |
| \*    | [What is SSR?](#q-what-is-ssr)                                                                                  |
| \*    | [What is Static Site Generation?](#q-what-is-static-site-generaion)                                             |
| \*    | [What is ISR?](#q-what-is-isr)                                                                                  |
| \*    | [What is AMP (Amplified Mobile Pages)](#q-what-is-amp-amplified-mobile-pages)                                   |
| \*    | [Middleware in next.js](#q-middleware-in-nextjs)                                                                |
| \*    | [Custom Server in Next.js](#q-custom-server-in-nextjs)                                                          |
| \*    | [Draft and Preview mode](#q-draft-and-preview-mode)                                                             |
| \*    | [next.config.js](#q-nextconfigjs)                                                                               |
| \*    | [order/preference of env files](#q-orderpreference-of-env-files-)                                               |

## Q. **_What is Next.js ?_**

Next.js is a framework which uses both server-side and client-side rendering. unlike react.js which is a library to create spa's which is not good for seo nextjs solves the seo issue with server side rendering.

## Q. **_How it is better than React.js ?_**

- Static site generation and incremental static rendering (ISR)
- It uses rust based compiler which is 7x faster than babel
- provides AMP pages
- provide build in optimized components such uas Image, Link, Script, Head etc
- provides built in support to create next server
- built in automatic static optimization
- It provides built in caching
- Provides Automatic Static Optimization

## Q. **_What is custom \_app_**

It is file which is used for passing initial data to all pages it runs before all the pages on client side.

**Note :** if \_app contains getInitialProps then getInitialPorps will call on server side as well if page to be navigated contains getServerSideProps fetch method.

having getInitialProps in \_app.tsx file will disable the automatic static optimization for pages without getStaticProps.

## Q. **_What is custom \_document_**

It is file which is used to edit base html content for all pages it runs on server side only so can not add any client events.

`<Html>, <Head />, <Main /> and <NextScript /> are required for pages to be properly render`

## Q. **_What is custom \_error_**

To customize default error page use _error file. It is required to create 404 page as well if there's _error page in project
## Q. **_Diff between catch all and optional catch all routes_**

catch all route will catch any route containing anything after specific path and can be accessed by placedholder but the catch is there should be something.

    for eg: /app/blog/[...id]
    
    here id is placeholder anything after blog will be present inside id, but /app/blog will result in 404 page

    in order to handle /app/blog and /app/blog/1... we should use optional catch all route
    syntax: /app/blog/[[...id]]

## Q. **_Data fetching methods in Next.js_**

*   getInitialProps (depricated): 
    * It runs on both server side and client side
    * at initial load on server then on client whenever navigated from link/router
    * returning an empty object will affect automatic static optimization

*   getServerSideProps:
    * It runs only on server side

*   getStaticProps:
    * It runs on server side only at build time
    * getStaticProps runs only on server side
    * initially it get's called at build time
    * at build time HTML gets generated and a json is generated used as a reference to props which will be added in build
    * runs on every request in development mode
    * It also doesn't have access to incoming req object as it generates static HTML
    * cached HTML will be present on cdn
    * on demand revalidation then need to call revalidate("path of the page")
    * on change call "/api/revalidate"

*   getStaticPaths:
    * no use without getStaticProps
    * can't be used with getServerSideProps
    * need to be used only for dynamic routes
    * can be used only for pages
    * will run at build time only
    * paths mentioned in this function will be created at build time and any new path not present in getStaticPaths will be generated first and then added to CDN with it's json data file so next time it will be fetched instantly

            fallback = false
            pages that are not returned by getStaticPaths will result in 404 pages
            
            fallback = true
            pages won't result in 404 but show a loading state to new page and when page generated then added to pre-rendered pages
            
            fallback = blocking
            pages won't result in 404 but doesn't show a loading state to new page and when page generated then added to pre-rendered pages

    Note: all 3 getServersideProps, getStaticProps, getStaticPaths will be ommitted from client build
## Q. **_What is SSR?_**

Server Side Rendering(SSR): If a page uses Server-side Rendering, the page HTML is generated on each request files containing getServerSideProps/getStaticProps are SSR

## Q. **_What is Static Site Generaion?_**

By default, Next.js pre-renders pages using Static Generation without fetching data<br/>

Nextjs provides 2 types of Pre rendering:
*   Static Generation: HTML created at build time
*   Server Side Rendering: HTML created at request time

Static Generation with Data:
1.  Your page content depends on external data: Use getStaticProps.
2.  Your page paths depend on external data: Use getStaticPaths (usually in addition to getStaticProps).

## Q. **_What is Automatic Static Optimizaton?_**

Nextjs provides by default automatic statick optimization for static pages which can be detected by the absence of functions getServerSideProps and getStaticProps.<br/><br/>
Nextjs converts static components into static HTML so browser have preloaded HTML then hydration occurs to make page interactive. which results in faster page load.
## Q. **_What is ISR?_**

Incremental Static Regeneration: To use ISR, add the revalidate prop to getStaticProps which regenerate the page which was generated at build time once the revalidate is passed
* Middleware won't be executed for On-Demand ISR requests

## Q. **_What is AMP (Amplified Mobile Pages)_**

They are 40% faster than normal HTML page<br/>
currently only CSS-in-JS is supported CSS modules are not supported yet<br/>
can make a page both hybrid or amp only, in case of hybrid amp page can be accessed by adding ?amp=1 query parameter after url
## Q. **_Middleware in next.js_**

create a middleware.ts file outside page directory and export a function which will be run before reaching apis and page transitions both so it will act as middleware for both client and server side

need to use route path in order to create seperate middleware for seperate route or can use matcher config option
## Q. **_Custom Server in Next.js_**

In order to use custom server remove <b>api</b> folder from pages directory
<br/><b>but</b><br/>
-   A custom server will remove important performance optimizations, like serverless functions and Automatic Static Optimization.
-   A custom server cannot be deployed on Vercel.
-   Have to disable the file system routing as well so use <b>useFileSystemPublicRoutes: false in next.config<b>

## Q. **_Draft and Preview mode_**

-- Not clear yet
## Q. **_next.config.js_**

    const nextConfig = {
        experimental: {
            amp: {
            skipValidation: true,
            }
        },
        // use this to disable filesystem based routes when using custom server
        // useFileSystemPublicRoutes: false,
        reactStrictMode: true,
        typescript: {
            ignoreBuildErrors: true,
        },
        modularizeImports: {
            'react-bootstrap': {
                transform: 'react-bootstrap/{{member}}',
            },
        },
        compiler: {
            baseUrl: ".",
            paths: {
            "@/styles/*": ["styles/*"],
            "@/components/*": ["components/*"]
            },
            reactRemoveProperties: { properties: ['^data-custom$'] },
            removeConsole: {
            exclude: ['error'],
            },
        },
        // to use any remote image path it needs to be define in next.config
        // custom generic loader can be defined here as well
        images: {
            loader: "custom",
            loaderFile: "./components/my-image-loader.tsx",
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'placekitten.com',
                    port: '',
                    pathname: '/**',
                },
            ],
        },
    }
## Q. **_order/preference of env files_**

1. process.env
2. .env.$(NODE_ENV).local
3. .env.local (Not checked when NODE_ENV is test.)
4. .env.$(NODE_ENV)
5. .env
