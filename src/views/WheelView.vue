<template>
  <div class="h-screen flex justify-center space-x-2 items-center">
    <Roulette
      ref="wheel"
      :items="items"
      :centeredIndicator="true"
      indicatorPosition="top"
      :size="400"
      :displayShadow="true"
      :duration="8"
      :resultVariation="70"
      easing="ease"
      :counterClockwise="true"
      :horizontalContent="false"
      :displayBorder="true"
      :displayIndicator="true"
      :baseDisplay="true"
      :baseSize="100"
      :baseDisplayShadow="true"
      baseBackground="rgb(255 69 69)"
      baseHtmlContent="You have just <br>won a"
      @click="launchWheel"
      @wheel-start="wheelStartedCallback"
      @wheel-end="wheelEndedCallback"
    />

    <div v-if="showLoader">
      <Loader />
    </div>

    <!-- Put this part before </body> tag -->
    <div class="modal" :class="showModal ? ' modal-open' : ''" id="my-modal-2">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Congratulations !</h3>
        <p class="py-2">
          You have just won : <strong>{{ selected }}</strong>
        </p>
        <p class="py-4">
          An email has been sent to you containing your winnings and how to get
          them.
        </p>
        <div class="modal-action">
          <button class="btn" @click="handleModalClose()">Finish</button>
        </div>
      </div>
    </div>
  </div>
</template>

  <script>
import { defineComponent, reactive } from "vue";
import { ref } from "vue";
import { Roulette } from "vue3-roulette";
import { useRouter } from "vue-router";
import emailjs from "emailjs-com";
import Loader from "../components/Loader.vue";

export default defineComponent({
  components: {
    Roulette,
    Loader,
  },
  setup() {
    const router = useRouter();
    const wheel = ref(null);
    const items = [
      {
        id: 1,
        name: "$50,000 in cash",
        htmlContent: "Cash",
        textColor: "",
        background: "",
      },
      {
        id: 2,
        name: "All expenses paid trip to Seychelles",
        htmlContent: "Trip",
        textColor: "",
        background: "",
      },
      {
        id: 3,
        name: "Student loan settlement",
        htmlContent: "Loan <br>settlement",
        textColor: "",
        background: "",
      },
      {
        id: 4,
        name: "150+ credit score",
        htmlContent: "Credit score",
        textColor: "",
        background: "",
      },
      {
        id: 5,
        name: "Job at multinational",
        htmlContent: "Job",
        textColor: "",
        background: "",
      },
      {
        id: 6,
        name: "Investment in stock with 35% ROI",
        htmlContent: "35% ROI",
        textColor: "",
        background: "",
      },
      {
        id: 7,
        name: "$100,000 worth of shopping voucher",
        htmlContent: "Shopping <br>voucher",
        textColor: "",
        background: "",
      },
    ];

    let showModal = ref(false);
    let showLoader = ref(false);
    let selected = ref("");

    const giftID = function (length = 6) {
      return Math.random()
        .toString(36)
        .substring(2, length + 2);
    };

    function launchWheel() {
      wheel.value.launchWheel();
    }

    function wheelStartedCallback() {
      showLoader.value = true;
    }

    function wheelEndedCallback() {
      let redeemCode = giftID();
      selected.value = wheel.value.itemSelected.name;

      var templateParams = {
        name: "Wheeler",
        email: JSON.parse(localStorage.getItem("email")),
        message:
          "You have just won " +
          JSON.parse(JSON.stringify(selected.value)) +
          ". This is from the wheelers fortune spin you did earlier. Contact us at gift@wheelers.com to confirm and get your gift and use the ID (" +
          redeemCode +
          ") to redeem your gift.",
      };

      emailjs
        .send(
          "service_obswits",
          "template_di3r33p",
          templateParams,
          "harMLUqEuvWT7hJXd"
        )
        .then(
          (result) => {
            showLoader.value = false;
            showModal.value = true;
            console.log(result);
          },
          (error) => {
            console.log(error);
          }
        );
    }

    function handleModalClose() {
      showModal.value = false;
      router.push("/success");
    }

    return {
      items,
      wheel,
      showLoader,
      showModal,
      selected,
      launchWheel,
      wheelEndedCallback,
      handleModalClose,
      giftID,
      wheelStartedCallback,
    };
  },
});
</script>

script