<script setup>
import { computed, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import {
  BButton,
  BAlert,
  BRow,
  BCol,
  BCard,
  BCardBody,
  BCardHeader,
  BCardImg,
} from "bootstrap-vue-next";

import { useBookingStore } from "@/stores/bookingStore";
import { useRoomStore } from "@/stores/roomStore";
import RoomExtras from "@/room/components/RoomExtras.vue";

const bookingStore = useBookingStore();
const roomStore = useRoomStore();

const { bookingSummary } = storeToRefs(bookingStore);
const { currentRoom, rooms } = storeToRefs(roomStore);

const { reset } = bookingStore;
const { loadRoom, loadRooms } = roomStore;

const HOTEL = {
  name: "Boutique Hotel Technikum",
  addressLine1: "Höchstädtplatz 6",
  addressLine2: "1200 Wien, Österreich",
  phone: "+43 1 234 56 78",
  email: "info@hotel-technikum.at",
  checkIn: "ab 15:00",
  checkOut: "bis 11:00",
};

const periodLabel = computed(() => {
  if (!bookingSummary.value.arrivalDate || !bookingSummary.value.departureDate) {
    return "—";
  }
  return `${bookingSummary.value.arrivalDate} – ${bookingSummary.value.departureDate}`;
});

const nights = computed(() => {
  const from = bookingSummary.value.arrivalDate;
  const to = bookingSummary.value.departureDate;
  if (!from || !to) return null;

  const fromDate = new Date(from);
  const toDate = new Date(to);
  if (Number.isNaN(fromDate.getTime()) || Number.isNaN(toDate.getTime())) return null;

  const diffDays = Math.round((toDate - fromDate) / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : null;
});

const mapsEmbedUrl = computed(() => {
  const query = encodeURIComponent(`${HOTEL.name}, ${HOTEL.addressLine1}, ${HOTEL.addressLine2}`);
  return `https://www.google.com/maps?q=${query}&output=embed`;
});

const oebbScottyUrl = computed(() => "https://www.oebb.at/de/fahrplan/fahrplan");

function printConfirmation() {
  window.print();
}


const roomForDisplay = computed(() => {
  const cr = currentRoom.value;
  const roomId = bookingSummary.value.roomId;

  if (!cr) return null;

  const fromList = rooms.value?.find((r) => r.id === roomId);

  const hasText = (v) => typeof v === "string" && v.trim().length > 0;

  return {
    ...cr,
    name: hasText(cr.name) ? cr.name : (fromList?.name || "Zimmer"),
    description: hasText(cr.description) ? cr.description : (fromList?.description || ""),
    number: cr.number || fromList?.number || cr.id,
    extras:
        Array.isArray(cr.extras) && cr.extras.length > 0
            ? cr.extras
            : (fromList?.extras || []),
    image: cr.image?.src ? cr.image : (fromList?.image || cr.image),
  };
});

const roomDisplayName = computed(() => roomForDisplay.value?.name || "Zimmer");
const roomDisplayNumber = computed(() => roomForDisplay.value?.number || "–");

onMounted(async () => {
  const id = bookingSummary.value.bookingId || "Buchung";
  document.title = `Reservierungsbestaetigung_${id}`;

  const roomId = bookingSummary.value.roomId;
  if (!roomId) return;

  if (!rooms.value || rooms.value.length === 0) {
    await loadRooms();
  }

  if (!currentRoom.value || currentRoom.value.id !== roomId) {
    await loadRoom(roomId);
  }
});
</script>

<template>
  <div class="booking-confirmation-print">
    <BAlert variant="success" show class="mb-4">
      <h2 class="h5 mb-1">Buchung erfolgreich!</h2>
      <p class="mb-0">
        Vielen Dank, {{ bookingSummary.firstname }} {{ bookingSummary.lastname }}.
        Ihre Buchung wurde erfolgreich gespeichert.
      </p>
    </BAlert>

    <BRow class="gy-4">
      <BCol lg="7">
        <BCard class="h-100">
          <BCardHeader>
            <h3 class="h6 mb-0">Buchungsdetails</h3>
          </BCardHeader>
          <BCardBody>
            <p class="mb-2">
              <strong>Buchungs-ID:</strong>
              {{ bookingSummary.bookingId || "wird Ihnen per E-Mail mitgeteilt" }}
            </p>

            <p class="mb-2">
              <strong>Zeitraum:</strong>
              {{ periodLabel }}
              <span v-if="nights" class="text-muted">({{ nights }} Nächte)</span>
            </p>

            <p class="mb-3">
              <strong>Frühstück:</strong>
              {{ bookingSummary.breakfast ? "Ja" : "Nein" }}
            </p>

            <hr class="my-3" />

            <h4 class="h6 text-muted mb-2">Ihre Angaben</h4>
            <p class="mb-1">
              <strong>Name:</strong>
              {{ bookingSummary.firstname }} {{ bookingSummary.lastname }}
            </p>
            <p class="mb-0">
              <strong>E-Mail:</strong>
              {{ bookingSummary.email }}
            </p>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="5">
        <BCard class="h-100" v-if="roomForDisplay">
          <BCardHeader>
            <h3 class="h6 mb-0">Ihr Zimmer</h3>
          </BCardHeader>

          <BCardImg
              v-if="roomForDisplay.image?.src"
              :src="roomForDisplay.image.src"
              :alt="roomDisplayName"
              top
          />

          <BCardBody>
            <p class="room-number mb-1 text-muted">
              Zimmer {{ roomDisplayNumber }}
            </p>

            <h4 class="room-name mb-2">
              {{ roomDisplayName }}
            </h4>

            <RoomExtras v-if="roomForDisplay.extras?.length" :extras="roomForDisplay.extras" />

            <p v-if="roomForDisplay.description" class="mt-2 mb-0">
              {{ roomForDisplay.description }}
            </p>
          </BCardBody>
        </BCard>

        <BAlert v-else variant="warning" show class="mb-0">
          Zimmerdetails konnten nicht geladen werden.
        </BAlert>
      </BCol>

      <BCol lg="12">
        <BCard>
          <BCardHeader>
            <h3 class="h6 mb-0">Anreise & Check-in</h3>
          </BCardHeader>
          <BCardBody>
            <BRow class="gy-3">
              <BCol md="6">
                <h4 class="h6 mb-2">Adresse</h4>
                <p class="mb-1 fw-semibold">{{ HOTEL.name }}</p>
                <p class="mb-0">
                  {{ HOTEL.addressLine1 }}<br />
                  {{ HOTEL.addressLine2 }}
                </p>

                <hr class="my-3" />

                <h4 class="h6 mb-2">Check-in / Check-out</h4>
                <p class="mb-1"><strong>Check-in:</strong> {{ HOTEL.checkIn }}</p>
                <p class="mb-0"><strong>Check-out:</strong> {{ HOTEL.checkOut }}</p>

                <hr class="my-3" />

                <h4 class="h6 mb-2">Öffentliche Anreise (Zug/Öffi)</h4>
                <ul class="mb-2">
                  <li>
                    Planen Sie Ihre Zugverbindung über
                    <a :href="oebbScottyUrl" target="_blank" rel="noreferrer">ÖBB Scotty</a>.
                  </li>
                  <li>
                    In Wien: Straßenbahn bis „Höchstädtplatz“ oder U6 bis "Dresdner Straße".
                  </li>
                </ul>

                <p class="print-only mt-3">
                  <strong>Karte/Adresse für Navigation:</strong>
                  {{ HOTEL.name }}, {{ HOTEL.addressLine1 }}, {{ HOTEL.addressLine2 }}
                </p>
              </BCol>

              <BCol md="6">
                <h4 class="h6 mb-2">Karte</h4>
                <div class="ratio ratio-16x9">
                  <iframe
                      :src="mapsEmbedUrl"
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                      title="Anfahrt zum Hotel"
                  />
                </div>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="12">
        <BCard>
          <BCardHeader>
            <h3 class="h6 mb-0">Kontakt</h3>
          </BCardHeader>
          <BCardBody>
            <p class="mb-2">
              Bei Fragen zur Buchung oder zur Anreise stehen wir gerne zur Verfügung:
            </p>
            <p class="mb-1">
              <strong>Telefon:</strong>
              <a :href="`tel:${HOTEL.phone.replace(/\\s/g, '')}`">{{ HOTEL.phone }}</a>
            </p>
            <p class="mb-0">
              <strong>E-Mail:</strong>
              <a :href="`mailto:${HOTEL.email}`">{{ HOTEL.email }}</a>
            </p>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <div class="d-flex flex-column flex-md-row gap-2 mt-4 no-print">
      <RouterLink :to="{ name: 'rooms' }" custom v-slot="{ navigate }">
        <BButton variant="primary" @click="() => { reset(); navigate(); }">
          Zurück zur Zimmerübersicht
        </BButton>
      </RouterLink>

      <RouterLink :to="{ name: 'landingPage' }" custom v-slot="{ navigate }">
        <BButton variant="outline-secondary" @click="navigate">
          Zur Startseite
        </BButton>
      </RouterLink>

      <BButton variant="outline-primary" @click="printConfirmation">
        Bestätigung drucken
      </BButton>
    </div>
  </div>
</template>

<style scoped>
.print-only {
  display: none;
}

.no-print {
  display: block;
}

.room-number {
  font-size: 0.85rem;
}

.room-name {
  font-size: 1.15rem;
  font-weight: 600;
  line-height: 1.2;
}
</style>

<style>

@media print {
  .container,
  .container-sm,
  .container-md,
  .container-lg,
  .container-xl,
  .container-xxl {
    max-width: 100% !important;
    width: 100% !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  /* Auch häufige Wrapper-Klassen (je nach DefaultLayout) */
  main,
  .content,
  .layout,
  .wrapper {
    max-width: 100% !important;
    width: 100% !important;
  }

  /* Card etwas kompakter, damit weniger Seiten */
  .card-body {
    padding: 10px !important;
  }

  /* Überschriften/Abstände reduzieren */
  .mb-4 { margin-bottom: 10px !important; }
  .mt-4 { margin-top: 10px !important; }
  .gy-4 { --bs-gutter-y: 10px !important; }

  /* Wenn du willst: Alert kompakter */
  .alert {
    padding: 10px !important;
    margin-bottom: 10px !important;
  }

  @page {
    margin: 12mm;
  }


  :global(header),
  :global(footer),
  :global(nav) {
    display: none !important;
  }


  :global(footer),
  :global(.footer),
  :global(.site-footer) {
    position: static !important;
  }


  .no-print {
    display: none !important;
  }


  iframe,
  .ratio {
    display: none !important;
  }

  .print-only {
    display: block !important;
  }


  .booking-confirmation-print {
    position: static !important;
    width: 100% !important;
  }


  :global(.row) {
    display: block !important;
  }
  :global([class^="col-"]),
  :global([class*=" col-"]) {
    max-width: 100% !important;
    width: 100% !important;
  }


  :global(.card) {
    break-inside: avoid;
    page-break-inside: avoid;
  }


  a[href]:after {
    content: "" !important;
  }


}

</style>
