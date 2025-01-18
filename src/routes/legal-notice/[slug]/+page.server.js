import { noticeTexts } from "../data";

export function load({ params }) {
  const slug = String(params?.slug).toLowerCase();
  const lang = ['en', 'de'].includes(slug) ? slug : 'en';
  const text = noticeTexts.find((text) => text.slug === lang);

  return {
    text
  };
}
