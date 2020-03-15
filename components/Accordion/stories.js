import { storiesOf } from '@storybook/react'
import Accordion from '.'
import { Fragment } from 'react'

const stories = storiesOf('Accordion', module)

stories.add('basic', () => (
  <Fragment>
    <Accordion label='Description'>
      <p className='accordion-description'>
        Command the attention in these gray twill joggers, built with a
        drawstring waist, front and back cargo pockets with zip details, and
        elasticized ankles.
      </p>
      <ul className='accordion-list'>
        <li>32" inseam, 13" leg opening</li>
        <li>100% cotton</li>
        <li>Machine wash</li>
        <li>Imported</li>
        <li>Model is wearing size medium</li>
        <li>STYLE: 0286-001417-0007924</li>
      </ul>
    </Accordion>
    <Accordion label='About Brand'>
      <p>
        Command the attention in these gray twill joggers, built with a
        drawstring waist, front and back cargo pockets with zip details, and
        elasticized ankles.
      </p>
      <ul>
        <li>32" inseam, 13" leg opening</li>
        <li>100% cotton</li>
        <li>Machine wash</li>
        <li>Imported</li>
        <li>Model is wearing size medium</li>
        <li>STYLE: 0286-001417-0007924</li>
      </ul>
    </Accordion>
    <Accordion label={'Shipping & Returns'}>
      <p>
        Command the attention in these gray twill joggers, built with a
        drawstring waist, front and back cargo pockets with zip details, and
        elasticized ankles.
      </p>
      <ul>
        <li>32" inseam, 13" leg opening</li>
        <li>100% cotton</li>
        <li>Machine wash</li>
        <li>Imported</li>
        <li>Model is wearing size medium</li>
        <li>STYLE: 0286-001417-0007924</li>
      </ul>
    </Accordion>
    <Accordion label={'Editor’s note'}>
      <p>
        Command the attention in these gray twill joggers, built with a
        drawstring waist, front and back cargo pockets with zip details, and
        elasticized ankles.
      </p>
      <ul>
        <li>32" inseam, 13" leg opening</li>
        <li>100% cotton</li>
        <li>Machine wash</li>
        <li>Imported</li>
        <li>Model is wearing size medium</li>
        <li>STYLE: 0286-001417-0007924</li>
      </ul>
    </Accordion>
  </Fragment>
))
