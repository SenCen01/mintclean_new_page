"use server";

export type QuoteFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitQuoteRequest(
  _prevState: QuoteFormState,
  formData: FormData
): Promise<QuoteFormState> {
  const firstName = formData.get("firstName")?.toString().trim() ?? "";
  const lastName = formData.get("lastName")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const propertyType = formData.get("propertyType")?.toString().trim() ?? "";
  const details = formData.get("details")?.toString().trim() ?? "";

  if (!firstName || !lastName || !email || !propertyType) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  // TODO: wire up to an email/CRM provider (e.g. Resend) once an API key is available.
  console.log("Quote request received:", {
    firstName,
    lastName,
    email,
    phone,
    propertyType,
    details,
  });

  return {
    status: "success",
    message: "Thanks! We've received your request and will be in touch shortly.",
  };
}
