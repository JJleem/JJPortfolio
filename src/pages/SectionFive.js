import React from 'react'
import CloudAnimation from '../Components/three/CloudAnimation'
import CloudRain from '../Components/three/CloudRain'
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
  const [showThankYouModal, setShowThankYouModal] = useState(true)
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
      <CloudRain />
      <Title>
        <h1>CONTACT</h1>
        <h3>저에게 </h3>
      </Title>
      <FormWrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              {...register('name', { required: true })}
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <span>Please enter a valid email address</span>}
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              {...register('message', { required: true })}
            ></textarea>
            {errors.message && <span>This field is required</span>}
          </div>
          <button type="submit">Send</button>
        </Form>
      </FormWrapper>

      {showThankYouModal && (
        <Modal className="modal">
          <ModalContent className="modal-content">
            <h2>Thank you!</h2>
            <p>Your message has been sent successfully.</p>
            <button onClick={() => setShowThankYouModal(false)}>Close</button>
          </ModalContent>
        </Modal>
      )}
    </Container>
  )
}

export default SectionFive

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
  position: absolute;
  top: 19%;
  left: 23.5%;
  transform: translate(-50%, -50%);
  display: flex;
  font-weight: bold;
  color: #fff;
  font-size: 44px;
`
const FormWrapper = styled.div`
  width: 1080px;
  height: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
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
  width: 500px;
  height: 500px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Form = styled.form``
