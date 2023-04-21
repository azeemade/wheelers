<template>
  <div class="hidden">
    <form ref="form">
      <label>Message</label>
      <textarea
        name="message"
        v-text="
          'You have just won ' +
          winning +
          '. This is from the wheelers fortune spin you did earlier. Contact us at git@wheelers.com to confirm and get your gift and use the ID ' +
          giftID +
          'to redeem your gift.'
        "
      ></textarea>
    </form>
  </div>
</template>

<script>
export default {
  props: ["winning", "giftID"],
  setup() {},
};
</script>