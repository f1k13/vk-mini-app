import BasePage from "../shared/ui/base-page";
import ReactionsList from "../widgets/reactions-list/ui/reactions-list";

const Reactions = () => {
  return (
    <BasePage title="Перекрёстные реакции" back={true}>
      <ReactionsList />
    </BasePage>
  );
};

export default Reactions;
