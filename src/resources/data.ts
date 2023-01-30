import mission from 'icons/mission.svg'
import vision from 'icons/vision.svg'
import values from 'icons/values.svg'

import solutions1 from 'images/solutions.1.png'
import solutions2 from 'images/solutions.2.png'
import solutions3 from 'images/solutions.3.png'
import solutions4 from 'images/solutions.4.png'

import phone from 'icons/phone.svg'
import email from 'icons/email.svg'
import website from 'icons/website.svg'
import location from 'icons/location.svg'

import instagram from 'icons/instagram.svg'
import facebook from 'icons/facebook.svg'
import twitter from 'icons/twitter.svg'
import linkedin from 'icons/linkedin.svg'

export const bottomLandingData = [
  'Creativity',
  'Technology',
  'Innovation',
  'Resourceful'
]

export const secondPart = [
  {
    icon: mission,
    title: "Mission",
    content: "Reduced recruiting costs, more efficient and effective communication,"
  },
  {
    icon: vision,
    title: "Vision",
    content: "Reduced recruiting costs, more efficient and effective communication,"
  },
  {
    icon: values,
    title: "Values",
    content: "Reduced recruiting costs, more efficient and effective communication,"
  },
]

export const fourthPart = [
  solutions1,
  solutions2,
  solutions3,
  solutions4
]

export const contactInfo = [
  {
    icon: phone,
    type: 'phone',
    value: [
      '01 343 8114',
      '+234 809 442 2556'
    ]
  },
  {
    icon: email,
    type: 'email',
    value: ['info@tingomobile.com.ng']
  },
  {
    icon: website,
    type: 'website',
    value: ['tingomobile.com.ng']
  },
  {
    icon: location,
    type: 'location',
    value: [
      '95 Broad Street',
      'Marina, Lagos Island',
      'Lagos, Nigeria.'
    ]
  },
]

export const footer = [
  {
    title: 'Company',
    values: [
      {
        title: 'About us',
        function: () => alert('About us')
      },
      {
        title: 'Blog',
        function: () => alert('Blog')
      },
      {
        title: 'Contact us',
        function: () => alert('Contact us')
      },
      {
        title: 'Privacy policy',
        function: () => alert('Privacy policy')
      },
    ]
  },
  {
    title: 'Help',
    values: [
      {
        title: 'Help center',
        function: () => alert('Help center')
      },
      {
        title: 'Terms of use',
        function: () => alert('Terms of use')
      },
      {
        title: 'Sponsoring',
        function: () => alert('Sponsoring')
      },
    ]
  },
  {
    title: 'Support',
    values: [
      {
        title: 'Invoice',
        function: () => alert('Invoice')
      },
      {
        title: 'Subscription service',
        function: () => alert('Subscription service')
      },
      {
        title: 'Website Integration',
        function: () => alert('Website Integration')
      },
    ]
  },
]

export const socials = [
  {
    icon: instagram,
    title: 'instagram',
    function: () => alert('instagram')
  },
  {
    icon: facebook,
    title: 'facebook',
    function: () => alert('facebook')
  },
  {
    icon: twitter,
    title: 'twitter',
    function: () => alert('twitter')
  },
  {
    icon: linkedin,
    title: 'linkedin',
    function: () => alert('linkedin')
  },
]