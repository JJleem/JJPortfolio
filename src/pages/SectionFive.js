import React from 'react'
import CloudAnimation from '../Components/three/CloudAnimation'

import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { useState } from 'react'
const SectionFive = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()
  const [showThankYouModal, setShowThankYouModal] = useState(false)
  const onSubmit = (data) => {
    emailjs
      .send('service_xgxiu7c', 'template_mv05zju', data, 'XCg3WmVZKOgjpDgTw')
      .then(
        (result) => {
          console.log('Email sent successfully!', result.text)
          reset()
          setShowThankYouModal(true)
        },
        (error) => {
          console.log('Email failed to send', error.text)
        }
      )
  }
  return (
    <Container>
      <CloudAnimation />
      <Title>
        <h1>CONTACT</h1>
        <h3>
          저에게 하고싶은 말씀이나 조언 등 아무거나 좋습니다. 새겨듣겠습니다.
        </h3>
      </Title>
      <FormWrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InnerWrapper>
            <Name>
              <label htmlFor="name">Name:</label>
              <NameEmail
                type="text"
                id="name"
                {...register('name', { required: true })}
              />
              {errors.name && <span>이름을 입력해주세요!</span>}
            </Name>
            <Email>
              <label htmlFor="email">Email:</label>
              <NameEmail
                type="email"
                id="email"
                {...register('email', {
                  required: true,
                  pattern: /^\S+@\S+$/i
                })}
              />
              {errors.email && <span>정확한 이메일을 입력해주세요!</span>}
            </Email>
          </InnerWrapper>
          <Message>
            <label htmlFor="message">Message:</label>
            <Textarea
              id="message"
              {...register('message', { required: true })}
            ></Textarea>
            {errors.message && <span>메세지를 입력해주세요!</span>}
          </Message>
          <Button type="submit">Send</Button>
        </Form>
      </FormWrapper>

      {showThankYouModal && (
        <Modal className="modal">
          <ModalContent className="modal-content">
            <h2>감사합니다!</h2>
            <p>성공적으로 메일이 발송되었습니다.</p>
            <Button onClick={() => setShowThankYouModal(false)}>Close</Button>
          </ModalContent>
        </Modal>
      )}
    </Container>
  )
}

export default SectionFive
const InnerWrapper = styled.div`
  display: flex;
  gap: 10px;
  @media ${({ theme }) => theme.xs} {
    flex-direction: column;
  }
`
const Button = styled.button`
  width: 20%;
  height: 40px;
  margin: 0 auto;
  border-radius: 10px;
  padding: 10px 0px 10px 0px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Form = styled.form`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  color: #fff;
  gap: 20px;
  span {
    height: 30px;
  }
  @media ${({ theme }) => theme.sm} {
    width: 80%;
  }
  @media ${({ theme }) => theme.xs} {
    height: 95%;
  }
`
const Name = styled.div`
  width: 50%;
  height: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media ${({ theme }) => theme.xs} {
    height: 250px;
    width: 100%;

    label {
      height: 27px;
    }
  }
`
const Email = styled.div`
  height: 100px;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media ${({ theme }) => theme.xs} {
    height: 250px;
    width: 100%;
    label {
      height: 27px;
    }
  }
`
const NameEmail = styled.input`
  width: 100%;
  padding-left: 10px;
  padding: 3px;
  @media ${({ theme }) => theme.xs} {
    width: 100%;
  }
`
const Message = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  label {
    height: fit-content;
    height: 40px;
  }
`
const Textarea = styled.textarea`
  width: 100%;
  height: 80%;
  padding: 10px;
  font-weight: bold;
  margin-bottom: 15px;
`
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
`
const Bg = styled(CloudAnimation)`
  z-index: -3 !important;
  border: 1px solid #f00 !important;
`
const Title = styled.div`
  width: 50%;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  font-weight: bold;
  color: #fff;
  font-size: 44px;
  z-index: 5;
  flex-direction: column;
  gap: 10px;
  h3 {
    font-size: 18px;
    height: 20px;
    line-height: 1.3;
  }
  @media ${({ theme }) => theme.lg} {
    font-size: 30px;
    top: 18%;
    h3 {
      font-size: 13px;
      height: 20px;
      line-height: 1.3;
    }
  }
  @media ${({ theme }) => theme.slg} {
    font-size: 30px;
    top: 18%;
    width: 80%;
  }
  @media ${({ theme }) => theme.sm} {
    h3 {
      font-size: 12px;
    }
  }
  @media ${({ theme }) => theme.xs} {
    h3 {
      font-size: 13px;
      height: 45px;
      line-height: 1.3;
    }
  }
`
const FormWrapper = styled.div`
  width: 50%;
  height: 60%;
  position: absolute;
  top: 54%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  @media ${({ theme }) => theme.slg} {
    width: 80%;
  }
  @media ${({ theme }) => theme.xs} {
    width: 90%;
    height: 73%;
    margin-top: 50px;
  }
`
const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`
const ModalContent = styled.div`
  width: 1000px;
  height: 600px;
  border-radius: 30px;
  border: 4px dashed ${({ theme }) => theme.cityBold};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  font-weight: bold;
  font-size: 22px;
  button {
    position: absolute;
    bottom: 20px;
  }
  @media ${({ theme }) => theme.xs} {
    width: 80%;
    height: 50%;
    font-size: 16px;
  }
`
