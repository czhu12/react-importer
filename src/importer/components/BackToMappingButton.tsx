import { useState } from 'preact/hooks';
import { Button, ConfirmationModal } from '../../components';
import { useTranslations } from '../../i18';

interface Props {
  onBackToMapping: () => void;
}

export default function BackToMappingButton({ onBackToMapping }: Props) {
  const { t } = useTranslations();

  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setConfirmationModalOpen(true)}
        variant="secondary"
      >
        {t('importer.back')}
      </Button>
      <ConfirmationModal
        variant="danger"
        onConfirm={onBackToMapping}
        open={confirmationModalOpen}
        setOpen={setConfirmationModalOpen}
        title={t('importer.backToMappingConfirmation.title')}
        subTitle={t('importer.backToMappingConfirmation.subTitle')}
        confirmationText={t(
          'importer.backToMappingConfirmation.confirmationText'
        )}
        cancelText={t('importer.backToMappingConfirmation.cancelText')}
      />
    </>
  );
}
