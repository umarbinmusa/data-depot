import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { Container, Wrapper } from "./Login";
import FormInput from "../components/FormInput";
import { useGlobalContext } from "../context/UserContext";
import { toast } from "react-toastify";
import FormRowSelect from "../components/FormRowSelect";

function Register() {
  const {
    setupUser,
    email,
    handleChange,
    phoneNumber,
    password,
    userName,
    passwordCheck,
    isLoading,
    selectedUserState,
    userStateList,
  } = useGlobalContext();
  const { referralId } = useParams();

  const navigate = useNavigate();
  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    handleChange({ name, value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.warning("Enter an your email");
      return;
    }
    let currentUser = { userName, password, email, phoneNumber, passwordCheck };
    if (referralId) currentUser.referredBy = referralId;
    setupUser({ currentUser, endPoint: "register" });
  };
  return (
    <Container>
      <Wrapper>
        <img
          src="./logo.png"
          alt="SPPDataDepot"
          height="50rem"
          width="90rem"
          className="logo"
          onClick={() => {
            navigate("/");
          }}
        />
        <button onClick={() => navigate("/")} className="home__btn btn">
          <FaHome />
        </button>

        <h3 className="title">Register an account</h3>
        <form onSubmit={handleSubmit} className="pl-4">
          <FormInput
            name="userName"
            value={userName}
            placeholder="username or business name"
            handleChange={handleInputChange}
            type="text"
            labelText="username or business name"
          />

          <FormInput
            value={email}
            name="email"
            placeholder="email"
            handleChange={handleInputChange}
            type="email"
            placeHolder="email"
          />

          <FormInput
            value={phoneNumber}
            name="phoneNumber"
            placeholder="phone number"
            handleChange={handleInputChange}
            type="number"
            labelText="phone number"
          />

          <FormInput
            value={password}
            name="password"
            placeholder="*****"
            handleChange={handleInputChange}
            type="password"
            placeHolder="password"
          />

          <FormInput
            value={passwordCheck}
            name="passwordCheck"
            placeholder="*****"
            type="password"
            placeHolder="Re-enter password"
            handleChange={handleInputChange}
          />
          <FormRowSelect
            handleChange={handleInputChange}
            labelText="which state are you from?"
            list={userStateList}
            name="selectedUserState"
            value={selectedUserState}
          />

          <button
            className="btn mt-2"
            href="#top"
            type="submit"
            disabled={isLoading}
          >
            <FaUserAlt />
            {isLoading ? " please wait.." : " Register"}
          </button>
        </form>
        <div className=" flex items-center justify-between pt-2">
          <p className="font-bold">Already have an account?</p>
          <button
            className="register__btn btn"
            onClick={() => {
              navigate("/login");
            }}
          >
            login
          </button>
        </div>
      </Wrapper>
    </Container>
  );
}

export default Register;
