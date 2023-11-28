import React from 'react'
import { Accordion } from "flowbite-react";

const Accordions = () => {
  return (
    <Accordion collapseAll>
    <Accordion.Panel>
      <Accordion.Title>Why do I need to submit my phone number to register?</Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          <p>
          For first time users, we will be giving you an activation code to the number you’ve provided for us to ensure the authenticity of your number. This is also important for us or drivers to get in touch with you when picking you up.
          </p>
        </p>

      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title>Why is there a booking fee?</Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          <p>
          The reason for a booking fee is for drivers to be able to cover their expense in going to where you are. Remember, drivers only start their meters once you’re inside the taxi. In addition, we provide you safety, speed and certainty. We will provide you the best taxi booking service in India and we promise to continuously serve you better every time.
        Booking fee starts from 20THB to 45THB calculating from the balance of demand and supply at specific time and area.
          </p>
        </p>

      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title>
      I booked a truck and my driver never arrived! What do I do?
      </Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          <p>
          We provide you with your driver’s information so feel free to call your designated driver. If any problems occur, call us at 02 021 2500 and we will investigate this for you.
          </p>
        </p>
        {/* <p className="mb-2 text-gray-500 dark:text-gray-400">
          Learn more about these technologies:
        </p>
        <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
          <li>
            <a
              className="text-cyan-600 hover:underline dark:text-cyan-500"
              href="https://flowbite.com/pro/"
            >
              <p>Flowbite Pro</p>
            </a>
          </li>
          <li>
            <a
              className="text-cyan-600 hover:underline dark:text-cyan-500"
              href="https://tailwindui.com/"
              rel="nofollow"
            >
              <p>Tailwind UI</p>
            </a>
          </li>
        </ul> */}
      </Accordion.Content>
    </Accordion.Panel>
  </Accordion>
  )
}

export default Accordions