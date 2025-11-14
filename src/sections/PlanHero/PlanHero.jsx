import './PlanHero.scss'
import PricingPlanCard from "@/components/PricingPlanCard/index.js";
import Badge from "@/components/Badge/index.js";

export const PlanHero = ({}) => {
  const planItems = [
    {
      variant: "Starter",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      title: "$100",
      iconName: "heart",
      data: 'starter',
      items: [
        {label: "Unlimited Upload", lineThrough: false},
        {label: "Advanced Statistic", lineThrough: false},
        {label: "Profile Badge", lineThrough: false},
        {label: "Access to the community", lineThrough: false},
        {label: "History of all Liked Photos", lineThrough: true},
        {label: "Directory Listing", lineThrough: true},
        {label: "Customize Your Profile", lineThrough: true},
        {label: "Display Your Workshops", lineThrough: true},
      ]

    },
    {
      variant: "Popular",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      title: "$1400",
      iconName: "thunder",
      isBest: true,
      data: 'popular',
      items: [
        {label: "Unlimited Upload", lineThrough: false},
        {label: "Advanced Statistic", lineThrough: false},
        {label: "Profile Badge", lineThrough: false},
        {label: "Access to the community", lineThrough: false},
        {label: "History of all Liked Photos", lineThrough: true},
        {label: "Directory Listing", lineThrough: false},
        {label: "Customize Your Profile", lineThrough: true},
        {label: "Display Your Workshops", lineThrough: true},
      ]
    },
    {
      variant: "Enterprise",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      title: "$2100",
      iconName: "corona",
      isBest: false,
      data: 'enterprise',
      items: [
        {label: "Unlimited Upload", lineThrough: false},
        {label: "Advanced Statistic", lineThrough: false},
        {label: "Profile Badge", lineThrough: false},
        {label: "Access to the community", lineThrough: false},
        {label: "History of all Liked Photos", lineThrough: false},
        {label: "Directory Listing", lineThrough: false},
        {label: "Customize Your Profile", lineThrough: false},
        {label: "Display Your Workshops", lineThrough: false},
      ]
    },
  ]
  const aria = "Plan"
  return (
    <section className="plan-hero container" aria-labelledby={aria}>
      <div className="plan-hero__inner" data-js-plan="">
        <header className="plan-hero__header">
          <h1 className="plan-hero__title">
            Choose a plan for a more advanced business
          </h1>
          <Badge className="plan-hero__badge" label="Pricing plans" imgSrc="src/assets/images/badge/cash.png" />
          <div className="plan-hero__action">
            <label className="plan-hero__label" htmlFor="price">
              Annual pricing (save 20%)
            </label>
            <input className="plan-hero__input" type="checkbox" id="price" name="price" data-js-plan-toggle="" />
          </div>
        </header>
        <div className="plan-hero__body">
          <ul className="plan-hero__list">
            {planItems.map((items) => (
              <PricingPlanCard {...items} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}