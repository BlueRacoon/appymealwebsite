// const { doc, setDoc, getDoc } = require("firebase/firestore");
// const { db } = require("../_app");
// const Stripe = require("stripe");
// const { sendOrderEmail } = require("services/email");
// const { updateCount } = require("services/ordernumber");
// const deletePendingOrder = require("services/deletePendingOrder");

// // small update to deploy

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: "2022-11-15",
// });

// async function handler(req, res) {
//   let event;

//   if (req.method === "POST") {
//     try {
//       const buf = await new Promise((resolve, reject) => {
//         const chunks = [];
//         req.on("data", (chunk) => chunks.push(chunk));
//         req.on("end", () => resolve(Buffer.concat(chunks)));
//         req.on("error", reject);
//       });

//       const sig = req.headers["stripe-signature"];

//       event = stripe.webhooks.constructEvent(
//         buf.toString(),
//         sig,
//         process.env.STRIPE_WEBHOOK_SECRET
//       );

//       if (event.type === "checkout.session.completed") {
//         const session = event.data.object;
//         if (session?.metadata?.app === "nextjs") {
//           let email = session?.customer_email;

//           const pendingOrderRef = await doc(db, "pendingOrders", email);
//           const pendingOrderSnapshot = await getDoc(pendingOrderRef);
//           const pendingOrder = pendingOrderSnapshot.data()?.pendingOrder;

//           const docRef = await doc(db, "orders", pendingOrder.orderDate);

//           await setDoc(
//             docRef,
//             {
//               [pendingOrder.number]: {
//                 ...pendingOrder,
//                 orderInfo: session,
//                 paymentIntent: session?.payment_intent,
//               },
//             },
//             { merge: true }
//           ).then(async () => {
//             try {
//               const userRef = doc(db, "users", pendingOrder?.email);
//               await setDoc(
//                 userRef,
//                 {
//                   [pendingOrder?.number]: pendingOrder,
//                 },
//                 { merge: true }
//               );
//             } catch (e) {}
//             try {
//               let finalAmt = parseFloat(
//                 (pendingOrder?.stripeTotal / 100).toFixed(2)
//               );
//               let cartSum = parseFloat(
//                 (pendingOrder?.cartSum / 100).toFixed(2)
//               );
//               let name = pendingOrder?.customer;
//               let userEmail = pendingOrder?.email;
//               let cart = pendingOrder?.cartTotal;
//               let restName = pendingOrder?.restaurant;
//               let calculatedTip = pendingOrder?.tip;
//               let totalTax = pendingOrder?.tax;
//               let appyFee = pendingOrder?.AMFee;
//               let newCount = pendingOrder?.number;
//               let restaurantPhoneNumber = pendingOrder?.number;
//               let restAddress = pendingOrder?.doorDashInfo?.pickup_address;
//               let restCity = pendingOrder?.doorDashInfo?.pickup_address;
//               let restState = pendingOrder?.doorDashInfo?.pickup_address;
//               let restZip = pendingOrder?.doorDashInfo?.pickup_address;
//               let deliveryQuote = pendingOrder?.deliveryQuote;

//               await sendOrderEmail(
//                 name,
//                 userEmail,
//                 cart,
//                 restName,
//                 finalAmt,
//                 cartSum,
//                 calculatedTip,
//                 totalTax,
//                 appyFee,
//                 newCount,
//                 restaurantPhoneNumber,
//                 restAddress,
//                 restCity,
//                 restState,
//                 restZip,
//                 deliveryQuote
//               );
//             } catch {}
//             try {
//               updateCount();
//               deletePendingOrder(email);
//             } catch {}
//           });
//         }
//       }

//       res.json({ received: true });
//     } catch (err) {
//       console.log(`Error message: ${err.message}`);
//       res.status(400).send(`Webhook Error: ${err.message}`);
//       return;
//     }
//   } else {
//     res.setHeader("Allow", "POST");
//     res.status(405).end("Method Not Allowed");
//   }
// }

// module.exports = handler;

// module.exports.config = {
//   api: {
//     bodyParser: false,
//   },
// };

const { doc, setDoc, getDoc } = require("firebase/firestore");
const { db } = require("../_app");
const Stripe = require("stripe");
const { sendOrderEmail } = require("services/email");
const { updateCount } = require("services/ordernumber");
const deletePendingOrder = require("services/deletePendingOrder");

// small update to deploy

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

async function handler(req, res) {
  let event;

  if (req.method === "POST") {
    try {
      const buf = await new Promise((resolve, reject) => {
        const chunks = [];
        req.on("data", (chunk) => chunks.push(chunk));
        req.on("end", () => resolve(Buffer.concat(chunks)));
        req.on("error", reject);
      });

      const sig = req.headers["stripe-signature"];

      event = stripe.webhooks.constructEvent(
        buf.toString(),
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );

      console.log("Received event:", event);

      if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        if (session?.metadata?.app === "nextjs") {
          let email = session?.customer_email;

          console.log("Email:", email);

          const pendingOrderRef = await doc(db, "pendingOrders", email);
          const pendingOrderSnapshot = await getDoc(pendingOrderRef);
          const pendingOrder = pendingOrderSnapshot.data()?.pendingOrder;

          console.log("Pending order:", pendingOrder);

          const docRef = await doc(db, "orders", pendingOrder.orderDate);

          await setDoc(
            docRef,
            {
              [pendingOrder.number]: {
                ...pendingOrder,
                orderInfo: session,
                paymentIntent: session?.payment_intent,
              },
            },
            { merge: true }
          ).then(async () => {
            try {
              const userRef = doc(db, "users", pendingOrder?.email);
              await setDoc(
                userRef,
                {
                  [pendingOrder?.number]: pendingOrder,
                },
                { merge: true }
              );
            } catch (e) {}
            try {
              let finalAmt = parseFloat(
                (pendingOrder?.stripeTotal / 100).toFixed(2)
              );
              let cartSum = parseFloat(
                (pendingOrder?.cartSum / 100).toFixed(2)
              );
              let name = pendingOrder?.customer;
              let userEmail = pendingOrder?.email;
              let cart = pendingOrder?.cartTotal;
              let restName = pendingOrder?.restaurant;
              let calculatedTip = pendingOrder?.tip;
              let totalTax = pendingOrder?.tax;
              let appyFee = pendingOrder?.AMFee;
              let newCount = pendingOrder?.number;
              let restaurantPhoneNumber = pendingOrder?.number;
              let restAddress = pendingOrder?.doorDashInfo?.pickup_address;
              let restCity = pendingOrder?.doorDashInfo?.pickup_address;
              let restState = pendingOrder?.doorDashInfo?.pickup_address;
              let restZip = pendingOrder?.doorDashInfo?.pickup_address;
              let deliveryQuote = pendingOrder?.deliveryQuote;

              console.log("Sending order email...");

              await sendOrderEmail(
                name,
                userEmail,
                cart,
                restName,
                finalAmt,
                cartSum,
                calculatedTip,
                totalTax,
                appyFee,
                newCount,
                restaurantPhoneNumber,
                restAddress,
                restCity,
                restState,
                restZip,
                deliveryQuote
              );

              console.log("Order email sent successfully.");
            } catch (error) {
              console.log("Error sending order email:", error);
            }

            try {
              console.log("Updating count...");
              updateCount();
              console.log("Count updated successfully.");

              console.log("Deleting pending order...");
              deletePendingOrder(email);
              console.log("Pending order deleted successfully.");
            } catch (error) {
              console.log(
                "Error updating count or deleting pending order:",
                error
              );
            }
          });
        }
      }

      res.json({ received: true });
    } catch (err) {
      console.log(`Error message: ${err.message}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

module.exports = handler;

module.exports.config = {
  api: {
    bodyParser: false,
  },
};