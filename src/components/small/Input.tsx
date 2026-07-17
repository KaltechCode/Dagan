import { Mail, Search } from "lucide-react";
import { Input } from "../ui/shared/Input/Index";
import { Field } from "../ui/shared/Fields";
import { FieldTwo } from "../ui/shared/Fields/Field";

export default function Demo() {
  return (
    <div className="space-y-5">
      <Input
        label="Email"
        placeholder="Email"
        type="email"
        leftIcon={<Mail size={18} />}
      />

      <FieldTwo
        label={"First Name "}
        description={"Please enter your first name."}
        required={true}
      >
        <div className="...">
          <Input
            label="Search"
            placeholder="Search products"
            leftIcon={<Search size={18} />}
          />
        </div>
      </FieldTwo>

      <Input label="Password" type="password" error="Password is required." />

      <Input loading placeholder="Loading..." />
    </div>
  );
}
