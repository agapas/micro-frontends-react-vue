<template>
  <div class="container">
    <h1>Choose the plan that fits for your team</h1>
    <p>
      Quickly build an effective pricing content for your potential customers
      with this layout.
    </p>
    <div class="pricing">
      <div class="plan">
        <h2>Basic</h2>
        <div class="price">FREE</div>
        <ul class="features">
          <li><i class="fas fa-check-circle"></i> Unlimited Websites</li>
          <li><i class="fas fa-check-circle"></i> 1 User</li>
          <li><i class="fas fa-check-circle"></i> 100MB Space/website</li>
          <li><i class="fas fa-check-circle"></i> Continuous deployment</li>
          <li><i class="fas fa-times-circle"></i> No priority support</li>
        </ul>
        <button>SIGN UP</button>
      </div>
      <div class="plan popular">
        <span>Most Popular</span>
        <h2>Pro</h2>
        <div class="price">$10/month</div>
        <ul class="features">
          <li><i class="fas fa-check-circle"></i> Unlimited Websites</li>
          <li><i class="fas fa-check-circle"></i> 5 Users</li>
          <li><i class="fas fa-check-circle"></i> 512MB Space/website</li>
          <li><i class="fas fa-check-circle"></i> Continuous deployment</li>
          <li><i class="fas fa-check-circle"></i> Email Support</li>
        </ul>
        <button>BUY NOW</button>
      </div>
      <div class="plan">
        <h2>Enterprise</h2>
        <div class="price">Custom Pricing</div>
        <ul class="features">
          <li><i class="fas fa-check-circle"></i> Unlimited Websites</li>
          <li><i class="fas fa-check-circle"></i> Unlimited Users</li>
          <li><i class="fas fa-check-circle"></i> Unlimited Space/website</li>
          <li><i class="fas fa-check-circle"></i> Continuous deployment</li>
          <li><i class="fas fa-check-circle"></i> 24/7 Email support</li>
        </ul>
        <button>CONTACT US</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PricingPlans",
};
</script>

<style scoped>
.container {
  height: calc(100% - 65px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    text-align: center;
    font-weight: 300;
    letter-spacing: -0.00833em;
    text-align: center;
    margin: 1.2rem 1rem 0;
  }

  p {
    margin: 1rem;
    font-size: 1.2rem;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(0, 0, 0, 0.6);
  }

  .pricing {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 0;

    .plan {
      padding: 1.2rem 1rem;
      margin: 1rem;
      width: 100%;
      border-radius: 4px;
      border: 1px solid #455a6480;
      box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
      text-align: center;
      transition: 0.3s;

      h2 {
        font-size: 22px;
        margin-bottom: 1rem;
      }

      .price {
        margin-bottom: 1.2rem;
        font-size: 1.7rem;
      }

      .features {
        margin: 0;
        padding: 0;
        list-style: none;
        li {
          margin: 5px;
          font-size: 1rem;
        }
      }

      button {
        border: none;
        width: 100%;
        padding: 8px 20px;
        margin-top: 1rem;
        border: 1px solid #455a6480;
        color: #455a64;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;

        &:hover {
          cursor: pointer;
          background-color: #455a640a;
          border: 1px solid #455a64;
        }
      }

      &.popular {
        border: 2px solid #6ab04c;
        position: relative;

        span {
          position: absolute;
          top: -18px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #6ab04c;
          color: #fff;
          width: 150px;
          padding: 4px 20px;
          font-size: large;
          border-radius: 5px;
        }

        button {
          background-color: #455a64;
          color: #fff;

          &:hover {
            background-color: rgb(48, 62, 70);
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 600px) {
  .container {
    h1 {
      margin-top: 2.5rem;
    }

    .pricing {
      padding-top: 2rem;

      .plan {
        padding: 1.2rem 2.2rem;
        margin: 1rem;
        width: auto;

        &.popular {
          transform: scale(1.05);
        }
      }
    }
  }
}

@media only screen and (min-width: 1024px) {
  .container {
    height: calc(100vh - 120px);
  }
}

@media only screen and (min-width: 900px) {
  .container .pricing .plan {
    padding: 1.2rem 2.5rem;
    margin: 1.5rem;
  }
}
</style>
