import { useTranslation } from "next-i18next";

import Container from "components/services/widget/container";
import Block from "components/services/widget/block";
import useWidgetAPI from "utils/proxy/use-widget-api";

export default function Component({ service }) {
  const { t } = useTranslation();

  const { widget } = service;

  const { data, error } = useWidgetAPI(widget, "groups");

  if (error) {
    return <Container error={error} />;
  }


  if (!data || !data.groups) {
    return (
      <Container service={service}>
        <Block label="codex.noData" />
      </Container>
    );
  }

  const groups = data.groups;

  return (
    <Container service={service}>
      <Block label="codex.publishers" value={t("common.number", { value: groups.publisherCount })} />
      <Block label="codex.series" value={t("common.number", { value: groups.seriesCount })} />
      <Block label="codex.issues" value={t("common.number", { value: groups.comicCount })} />
    </Container>
  );
}
