import { React, Button, Text, Icon } from '@monorepo/ui-components';

const ExportButton = ({ onClick, isMobile }) => {
  return (
    <Button size="medium" maxWidth={isMobile ? '100%' : '255px'} onClick={onClick}>
      <Icon name="download" size="sm" stroke="#fff" />
      <Text fontWeight={600}>Clique para baixar</Text>
    </Button>
  );
};

export default ExportButton;
