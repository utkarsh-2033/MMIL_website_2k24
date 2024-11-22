import React from "react";
import styled from "styled-components";
import { FaInstagram, FaLinkedin, FaRegTimesCircle } from "react-icons/fa";
import hand from '../src/assets/hand.svg';

// Styled Components
const GetInTouchContainer = styled.section`
  width: 60vw;
  max-width: 75rem;
  height: 100vh;
  padding: 2rem;
  margin: 4rem auto;
  text-align: center;
  font-family: "Ubuntu", serif;
  color: #eeeeef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 48rem) {
    width: 90%;
    padding: 1rem;
    margin: 2rem auto;
  }
`;

const Title = styled.h2`
  font-family: "Ubuntu", serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 5rem;
  line-height: 2.875rem;
  letter-spacing: 0.46875rem;
  @media (max-width: 48rem) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5.5rem;
  gap: 3.5rem;
  @media (max-width: 48rem) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 3rem;
  }
`;

const SocialLinkBox = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15rem;
  padding: 1.25rem;
  border-radius: 0.5rem;
  border: 1px solid #efecfd;
  text-decoration: none;
  color: #eeeeef;
  transition: background 0.3s;

  &:hover {
    background: #333333;
  }

  p {
    font-family: "Ubuntu", serif;
    font-size: 1.75rem;
    font-weight: 400;
    line-height: 1.75rem;
    letter-spacing: 0.125rem;
    text-align: left;
    @media (max-width: 48rem) {
      font-size: 1.25rem;
      line-height: 1.25rem;
      text-align: center;
    }
  }

  svg {
    font-size: 2.5rem;
    @media (max-width: 48rem) {
      font-size: 2rem;
    }
  }
`;

const CustomInputContainer = styled.div`
  position: relative;
  width: 25.5625rem;
  height: 4.5625rem;
  margin-bottom: 2rem;

  @media (max-width: 48rem) {
    width: 100%;
    height: 4rem;
  }

  input {
    width: 100%;
    height: 100%;
    padding: 0.75rem;
    font-size: 1.5rem;
    font-family: "Open Sans Hebrew", sans-serif;
    font-weight: 400;
    line-height: 2.875rem;
    text-align: left;
    border-radius: 0.5rem;
    border: 1px solid #ffffff;
    background: transparent;
    color: #eeeeef;
    outline: none;

    @media (max-width: 48rem) {
      font-size: 1.25rem;
      line-height: 2.5rem;
      padding: 0.5rem;
    }

    &::placeholder {
      color: #eeeeef;
    }

    &:focus {
      border-color: #f6e1fd;
    }
  }

  .input-line {
    width: 20rem;
    height: 0;
    border-bottom: 1px solid #ffffff;
    position: absolute;
    bottom: 0.5rem;
    left: 0.25rem;

    @media (max-width: 48rem) {
      width: 90%;
    }
  }

  .clear-icon {
    position: absolute;
    right: 0.625rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #ffffff;
  }
`;

const InputFieldsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 48rem) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const TextareaField = styled.textarea`
  width: 100%;
  height: 8.9375rem;
  padding: 1.125rem;
  font-size: 1.5rem;
  font-weight: 100;
  line-height: 2.875rem;
  letter-spacing: 0.125rem;
  text-align: left;
  border-radius: 0.5rem;
  border: 1px solid #f6e1fd;
  background: transparent;
  color: #eeeeef;
  outline: none;
  resize: none;

  @media (max-width: 48rem) {
    height: 6.25rem;
    padding: 0.75rem;
    font-size: 1rem;
  }

  &::placeholder {
    color: #eeeeef;
  }

  &:focus {
    border-color: #f6e1fd;
  }
`;

const BottomBorder = styled.div`
  width: 100%;
  border-top: 0.3125rem solid #eeeeff;
  margin-top: 2rem;
`;

const CustomInput = ({ placeholder, type }) => (
  <CustomInputContainer>
    <input type={type} placeholder={placeholder} />
    <div className="input-line" />
    <FaRegTimesCircle className="clear-icon" />
  </CustomInputContainer>
);

const HandImage = styled.img`
  width: 31.25rem;
  height: 43.125rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
  transform: rotate(-12.43deg);
`;

const GetInTouch = () => {
  return (
    <div>
      <GetInTouchContainer>
        <Title>GET IN TOUCH</Title>
        <SocialLinksContainer>
          <SocialLinkBox href="https://www.instagram.com">
            <FaInstagram />
            <p>Instagram</p>
          </SocialLinkBox>
          <SocialLinkBox href="https://www.linkedin.com">
            <FaLinkedin />
            <p>Linkedin</p>
          </SocialLinkBox>
        </SocialLinksContainer>
        <InputFieldsContainer>
          <CustomInput type="email" placeholder="Your email" />
          <CustomInput type="tel" placeholder="+91" />
        </InputFieldsContainer>
        <TextareaField placeholder="Comment here..." />
      </GetInTouchContainer>
      <BottomBorder />
      {/* <HandImage src={hand} alt='handd' /> */}
    </div>
  );
};

export default GetInTouch;
