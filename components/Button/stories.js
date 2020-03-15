import { storiesOf } from '@storybook/react'
import Button from '.'

const stories = storiesOf('Button', module)

stories.add('All Variants', () => {
  return (
    <div>
      <Button color='primary'>Click Me!</Button>
      <Button color='secondary'>Click Me!</Button>
      <Button color='primary'>Click Me!</Button>
      <div
        style={{
          backgroundColor: 'black',
          paddingBottom: '10px',
          marginTop: '10px'
        }}
      >
        <Button color='transparent'>Click Me!</Button>
      </div>
    </div>
  )
})

// const StarIcon = props => (
//   <svg {...props} viewBox='0 0 27 25' xmlns='http://www.w3.org/2000/svg'>
//     <path
//       d='M21.365 25l-2.138-9.249 7.134-6.22-9.404-.811L13.283 0 9.61 8.72l-9.404.812 7.133 6.22L5.201 25l8.082-4.905z'
//       fill='currentColor'
//     />
//   </svg>
// )

// function Buttons ({ text, buttonContent, ...extraProps }) {
//   return (
//     <StateShowcase hint={text || 'Buttons'}>
//       <Button color='primary' {...extraProps}>
//         {buttonContent || 'Primary Text'}
//       </Button>
//       <Button color='secondary' {...extraProps}>
//         {buttonContent || 'Secondary Text'}
//       </Button>
//       <Button color='text' {...extraProps}>
//         {buttonContent || 'Text'}
//       </Button>
//     </StateShowcase>
//   )
// }

// function AllButtons (props) {
//   return (
//     <React.Fragment>
//       <Buttons text='Small Buttons (default)' {...props} />
//       <Buttons text='Medium Buttons' size='medium' {...props} />
//       <Buttons text='Large Buttons' size='large' {...props} />
//       <Buttons text='Huge Buttons' size='huge' {...props} />
//     </React.Fragment>
//   )
// }

// stories.add('Basic', () => <AllButtons />)
// stories.add('Pending', () => <AllButtons pending />)
// stories.add('Disabled', () => <AllButtons disabled />)

// stories.add('Basic Block', () => <AllButtons variant='block' />)
// stories.add('Pending Block', () => <AllButtons variant='block' pending />)
// stories.add('Disabled Block', () => <AllButtons variant='block' disabled />)

// stories.add('Basic Circle', () => (
//   <AllButtons
//     variant='circle'
//     buttonContent={<StarIcon style={{ width: '20px', height: '20px' }} />}
//   />
// ))
// stories.add('Pending Circle', () => (
//   <AllButtons
//     variant='circle'
//     pending
//     buttonContent={<StarIcon style={{ width: '20px', height: '20px' }} />}
//   />
// ))
// stories.add('Disabled Circle', () => (
//   <AllButtons
//     variant='circle'
//     disabled
//     buttonContent={<StarIcon style={{ width: '20px', height: '20px' }} />}
//   />
// ))
