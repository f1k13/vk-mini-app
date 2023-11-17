import BasePage from "../shared/ui/base-page";
import SymptomsList from "../widgets/symptoms-list/ui/symptoms-list";

const Symptoms = () => {
  return (
    <BasePage title="Симптомы" back={true}>
      <SymptomsList />
    </BasePage>
  );
};

export default Symptoms;
