import { Helmet } from "react-helmet-async";

interface SEOProps {
    title: string;
    description: string;
    image?: string;
    url?: string;
}

export const SEO = ({
    title,
    description,
    image = "/hero-flags.jpg",
    url = "https://futureunion.co"
}: SEOProps) => {
    const siteTitle = "Future Union";
    const fullTitle = title === siteTitle ? siteTitle : `${title} | ${siteTitle}`;

    // Ensure image URL is absolute
    const fullImageUrl = image.startsWith("http")
        ? image
        : `${url}${image.startsWith("/") ? "" : "/"}${image}`;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />

            {/* Open Graph tags */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={fullImageUrl} />

            {/* Twitter tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@futureunion" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImageUrl} />
        </Helmet>
    );
};
