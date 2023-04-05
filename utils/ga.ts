export const pageview = (url: string) => {
  window.gtag("event", "page_view", {
    page_path: url,
  });
};

type GaEventArgs = {
  action: string;
  category: string;
  label: string;
  value: string;
};

export const event = ({
  action,
  category,
  label,
  value,
}: GaEventArgs) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
