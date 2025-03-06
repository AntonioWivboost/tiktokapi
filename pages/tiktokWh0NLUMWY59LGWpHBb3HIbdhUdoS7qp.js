export default function TikTokVerification() {
    return null;
  }
  
  export async function getServerSideProps({ res }) {
    res.setHeader('Content-Type', 'text/plain');
    res.write('tiktok-developers-site-verification=hWh0NLUMWY59LGWpHBb3HlbdhUdoS7qp');
    res.end();
    return { props: {} };
  }