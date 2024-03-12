'use server';

import { Resend } from 'resend';
import React from 'react';
import { validateString } from '@/utils/validateString';
import EmailTemp from '@/email/EmailTemp';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  const toEmail = 'primewebsolutionsllc@gmail.com';

  if (!validateString(email, 500)) {
    throw new Error('Invalid email');
  }
  if (!validateString(message, 5000)) {
    throw new Error('Invalid message');
  }
  if (!validateString(name, 5000)) {
    throw new Error('Invalid name');
  }

  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: toEmail,
      subject: `New Message from ${name as string}.`,
      reply_to: email as string,
      react: React.createElement(EmailTemp, {
        message: message as string,
        email: email as string,
      }),
    });
  } catch (err: unknown) {
    console.log(err);
  }
};
