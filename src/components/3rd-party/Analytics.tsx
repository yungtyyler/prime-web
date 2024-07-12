import Script from 'next/script';

const Analytics = ({ id = 'G-XXXXXXXXXX' }) => {
  return (
    // Google tag (gtag.js)
    <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${id}');
        `}
      </Script>
    </>
  );
};
export default Analytics;
