import BasePage from "../shared/ui/base-page";
import AllergiesListUser from "../widgets/allergies-list-user/ui/allergies-list-user";

const AllergiesSelectedUser = () => {
  return (
    <BasePage title="Аллергены" back={true}>
      <AllergiesListUser />
    </BasePage>
  );
};

export default AllergiesSelectedUser;
