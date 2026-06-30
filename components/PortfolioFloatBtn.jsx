import Link from 'next/link';

export default function PortfolioFloatBtn() {
  return (
    <Link
      href="/portfolio"
      className="portfolio-float-btn"
      aria-label="View chuck design portfolio"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="12" height="12" aria-hidden="true">
        <rect width="100" height="100" rx="22" fill="#111111"/>
        <rect x="26" y="26" width="48" height="48" fill="#E05C3A"/>
      </svg>
      portfolio
    </Link>
  );
}
