import { useState } from "react";
import Input from "~/components/Input";
import Button from "~/components/Button";
import { StyledContainer } from "./styles";

const ProfileDashboard = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    if (
      name.length > 0 &&
      phone.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      oldPassword.length > 0 &&
      newPassword.length > 0 &&
      confirmPassword.length > 0
    ) {
      await setTimeout(() => {
        console.log(
          JSON.stringify({
            name,
            phone,
            email,
            password,
            oldPassword,
            newPassword,
            confirmPassword
          })
        );
      }, 1000);
      setName("");
      setPhone("");
      setEmail("");
      setPassword("");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } else {
      throw new Error("All the fields are required.");
    }
  };

  return (
    <StyledContainer>
      <form action="" onSubmit={handleSubmit}>
        <section>
          <h3>Account Information</h3>
          <Input
            placeholder="Name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input
            placeholder="Phone Number"
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </section>
        <section>
          <h3>Change Password</h3>
          <Input
            placeholder="Old Password"
            type="password"
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
          />
          <Input
            placeholder="New Password"
            type="password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
          />
          <Input
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            errorProps={{
              hasError:
                newPassword.length > 0 &&
                confirmPassword.length > 0 &&
                newPassword !== confirmPassword,
              message: "Password does not match with the new password."
            }}
          />
        </section>
        <Button color="primary" type="submit">
          Save
        </Button>
      </form>
    </StyledContainer>
  );
};

export default ProfileDashboard;
