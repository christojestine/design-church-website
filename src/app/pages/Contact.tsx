import { useRef, useState } from "react";
import { useForm, type RegisterOptions } from "react-hook-form";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Alert from "@mui/material/Alert";
import { ScrollReveal } from "../components/ScrollReveal";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import { glassCard, inputFieldSx, pageHeaderSx } from "../../styles/style";
import { useLanguage, type Text } from "../i18n/LanguageContext";
import {
  type ContactValues,
  LIMITS,
  NAME_PATTERN,
  EMAIL_PATTERN,
  PHONE_PATTERN,
  HTML_TAG_PATTERN,
  MAX_LINKS,
  countLinks,
  submitToGoogleForm,
  cooldownRemaining,
  startCooldown,
} from "./Contact.form";

const text = {
  chip: { en: "Get In Touch", ml: "ബന്ധപ്പെടാം" },
  title: { en: "Contact Us", ml: "ഞങ്ങളെ ബന്ധപ്പെടുക" },
  intro: {
    en: "We'd love to hear from you. Reach out and we'll get back to you soon.",
    ml: "നിങ്ങളുടെ സന്ദേശങ്ങൾ ഞങ്ങൾ സന്തോഷത്തോടെ സ്വീകരിക്കുന്നു. ബന്ധപ്പെടൂ, ഞങ്ങൾ എത്രയും വേഗം മറുപടി നൽകാം.",
  },
  formTitle: { en: "Send a Message", ml: "സന്ദേശം അയയ്ക്കുക" },
  thanks: {
    en: "Thank you! Your message has been sent. We'll get back to you within 1–2 business days.",
    ml: "നന്ദി! നിങ്ങളുടെ സന്ദേശം ലഭിച്ചു. 1–2 പ്രവൃത്തി ദിവസങ്ങൾക്കുള്ളിൽ ഞങ്ങൾ മറുപടി നൽകും.",
  },
  name: { en: "Full Name", ml: "പൂർണ്ണ നാമം" },
  email: { en: "Email Address", ml: "ഇമെയിൽ വിലാസം" },
  phone: { en: "Phone (optional)", ml: "ഫോൺ (ആവശ്യമെങ്കിൽ)" },
  subject: { en: "Subject", ml: "വിഷയം" },
  message: { en: "Message", ml: "സന്ദേശം" },
  send: { en: "Send Message", ml: "സന്ദേശം അയയ്ക്കുക" },
  sending: { en: "Sending…", ml: "അയയ്ക്കുന്നു…" },
  sendFailed: {
    en: "Sorry, your message couldn't be sent. Please check your connection and try again, or email us directly.",
    ml: "ക്ഷമിക്കണം, സന്ദേശം അയയ്ക്കാനായില്ല. ഇന്റർനെറ്റ് കണക്ഷൻ പരിശോധിച്ച് വീണ്ടും ശ്രമിക്കുക, അല്ലെങ്കിൽ ഞങ്ങൾക്ക് നേരിട്ട് ഇമെയിൽ ചെയ്യുക.",
  },
  cooldown: {
    en: "You've just sent a message. Please wait a minute before sending another.",
    ml: "നിങ്ങൾ ഇപ്പോൾ ഒരു സന്ദേശം അയച്ചു. മറ്റൊന്ന് അയയ്ക്കാൻ ഒരു മിനിറ്റ് കാത്തിരിക്കുക.",
  },
  sendAnother: { en: "Send another message", ml: "മറ്റൊരു സന്ദേശം അയയ്ക്കുക" },
  tooFast: {
    en: "Please check your details and press Send again.",
    ml: "വിവരങ്ങൾ പരിശോധിച്ച ശേഷം വീണ്ടും 'അയയ്ക്കുക' അമർത്തുക.",
  },
} satisfies Record<string, Text>;

// Validation messages. The form rules return these keys and each field shows the translation,
// so errors switch language along with the rest of the page.
const errorText = {
  required: { en: "This field is required.", ml: "ഈ വിവരം നിർബന്ധമാണ്." },
  nameLength: {
    en: `Please enter ${LIMITS.name.min}–${LIMITS.name.max} characters.`,
    ml: `${LIMITS.name.min}–${LIMITS.name.max} അക്ഷരങ്ങൾ നൽകുക.`,
  },
  nameChars: {
    en: "Please use letters only (spaces, dots, hyphens and apostrophes are fine).",
    ml: "അക്ഷരങ്ങൾ മാത്രം ഉപയോഗിക്കുക (സ്പേസ്, കുത്ത്, ഹൈഫൻ എന്നിവ ആകാം).",
  },
  email: { en: "Please enter a valid email address.", ml: "ശരിയായ ഇമെയിൽ വിലാസം നൽകുക." },
  phone: {
    en: "Please enter a valid phone number (digits, spaces, + and - only).",
    ml: "ശരിയായ ഫോൺ നമ്പർ നൽകുക (അക്കങ്ങൾ, സ്പേസ്, +, - മാത്രം).",
  },
  subjectLength: {
    en: `Please enter ${LIMITS.subject.min}–${LIMITS.subject.max} characters.`,
    ml: `${LIMITS.subject.min}–${LIMITS.subject.max} അക്ഷരങ്ങൾ നൽകുക.`,
  },
  messageLength: {
    en: `Please enter ${LIMITS.message.min}–${LIMITS.message.max} characters.`,
    ml: `${LIMITS.message.min}–${LIMITS.message.max} അക്ഷരങ്ങൾ നൽകുക.`,
  },
  noHtml: { en: "HTML tags are not allowed.", ml: "HTML ടാഗുകൾ അനുവദനീയമല്ല." },
  noLinks: { en: "Links are not allowed in the subject.", ml: "വിഷയത്തിൽ ലിങ്കുകൾ അനുവദനീയമല്ല." },
  tooManyLinks: {
    en: `Please include no more than ${MAX_LINKS} links.`,
    ml: `${MAX_LINKS}-ൽ കൂടുതൽ ലിങ്കുകൾ ചേർക്കരുത്.`,
  },
} satisfies Record<string, Text>;
type ErrorKey = keyof typeof errorText;

const err = (key: ErrorKey) => key;
const lengthBetween = (min: number, max: number, key: ErrorKey) => (v: string) => {
  const n = v.trim().length;
  return (n >= min && n <= max) || err(key);
};
const noHtml = (v: string) => !HTML_TAG_PATTERN.test(v) || err("noHtml");

type Field = Exclude<keyof ContactValues, "hpTrap">;
const rules: Record<Field, RegisterOptions<ContactValues, Field>> = {
  name: {
    required: err("required"),
    validate: {
      length: lengthBetween(LIMITS.name.min, LIMITS.name.max, "nameLength"),
      chars: (v) => NAME_PATTERN.test(v.trim()) || err("nameChars"),
    },
  },
  email: {
    required: err("required"),
    validate: (v) => {
      const t = v.trim();
      return (t.length <= LIMITS.email.max && EMAIL_PATTERN.test(t)) || err("email");
    },
  },
  phone: {
    validate: (v) => {
      const t = v.trim();
      if (!t) return true;
      const digits = t.replace(/\D/g, "").length;
      return (PHONE_PATTERN.test(t) && digits >= 7 && digits <= 15) || err("phone");
    },
  },
  subject: {
    required: err("required"),
    validate: {
      length: lengthBetween(LIMITS.subject.min, LIMITS.subject.max, "subjectLength"),
      noHtml,
      noLinks: (v) => countLinks(v) === 0 || err("noLinks"),
    },
  },
  message: {
    required: err("required"),
    validate: {
      length: lengthBetween(LIMITS.message.min, LIMITS.message.max, "messageLength"),
      noHtml,
      links: (v) => countLinks(v) <= MAX_LINKS || err("tooManyLinks"),
    },
  },
};

// Submissions faster than this after the form appears are probably bots. Browser autofill lets a
// real person get close, so this only asks them to press Send again rather than dropping it.
const MIN_FILL_MS = 2000;

const inputSx = inputFieldSx;

const info: {
  Icon: typeof LocationOnIcon;
  label: Text;
  value: Text;
  multiline: boolean;
  bg: string;
  color: string;
}[] = [
  {
    Icon: LocationOnIcon,
    label: { en: "Address", ml: "വിലാസം" },
    value: {
      en: "St. Mary's Forane Church (Shrine of the Nativity of Our Lady),\nlocated in Chalakudy, Thrissur district, Kerala 680307.",
      ml: "സെന്റ് മേരീസ് ഫൊറോന പള്ളി (പരിശുദ്ധ ദൈവമാതാവിന്റെ പിറവിത്തിരുനാൾ ദേവാലയം),\nചാലക്കുടി, തൃശ്ശൂർ ജില്ല, കേരളം 680307.",
    },
    multiline: true,
    bg: "#dbeafe",
    color: "#1d4ed8",
  },
  {
    Icon: PhoneIcon,
    label: { en: "Phone", ml: "ഫോൺ" },
    value: { en: "0480 2701614, 2701314", ml: "0480 2701614, 2701314" },
    multiline: false,
    bg: "#dcfce7",
    color: "#16a34a",
  },
  {
    Icon: EmailOutlinedIcon,
    label: { en: "Email", ml: "ഇമെയിൽ" },
    value: { en: "stmaryscky@gmail.com", ml: "stmaryscky@gmail.com" },
    multiline: false,
    bg: "#fef3c7",
    color: "#b45309",
  },
  {
    Icon: AccessTimeIcon,
    label: { en: "Office Hours", ml: "ഓഫീസ് സമയം" },
    value: { en: "9:00 AM – 5:00 PM (Mon – Sat)", ml: "രാവിലെ 9:00 – വൈകിട്ട് 5:00 (തിങ്കൾ – ശനി)" },
    multiline: false,
    bg: "#ede9fe",
    color: "#7c3aed",
  },
];

export default function Contact() {
  const { tr } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [notice, setNotice] = useState<"sendFailed" | "cooldown" | "tooFast" | null>(null);
  const shownAt = useRef(Date.now());
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    mode: "onTouched",
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "", hpTrap: "" },
  });

  // MUI's TextField needs register's ref on the <input> (inputRef), not on its wrapper.
  const field = (name: Field) => {
    const { ref, ...rest } = register(name, rules[name]);
    const error = errors[name]?.message as ErrorKey | undefined;
    return {
      ...rest,
      inputRef: ref,
      error: Boolean(error),
      helperText: error ? tr(errorText[error]) : undefined,
    };
  };

  const onSubmit = async (values: ContactValues) => {
    setNotice(null);
    // Bot: filled the honeypot, which people can't see or reach. Show success, send nothing.
    if (values.hpTrap) {
      if (process.env.NODE_ENV !== "production") {
        console.warn("Contact form: honeypot filled, treated as a bot and nothing was sent.");
      }
      setSubmitted(true);
      return;
    }
    if (Date.now() - shownAt.current < MIN_FILL_MS) {
      setNotice("tooFast");
      return;
    }
    if (cooldownRemaining() > 0) {
      setNotice("cooldown");
      return;
    }
    try {
      await submitToGoogleForm(values);
      startCooldown();
      reset();
      setSubmitted(true);
    } catch {
      setNotice("sendFailed");
    }
  };

  return (
    <Box>
      <Box sx={pageHeaderSx}>
        <ScrollReveal>
          <Chip
            label={tr(text.chip)}
            sx={{
              background: "rgba(29,78,216,0.08)",
              color: "#1d4ed8",
              fontWeight: 600,
              mb: 2,
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.8rem", md: "4rem" },
              fontWeight: 800,
              color: "#0f172a",
              mb: 2,
              letterSpacing: "-0.03em",
            }}
          >
            {tr(text.title)}
          </Typography>
          <Typography sx={{ color: "#475569", fontSize: "1.15rem" }}>
            {tr(text.intro)}
          </Typography>
        </ScrollReveal>
      </Box>

      <Box sx={{ pt: 0, px: 3, pb: { xs: 10, md: 14 } }}>
        <Box sx={{ maxWidth: 1100, mx: "auto" }}>
          <Grid container spacing={5} sx={{ alignItems: "flex-start" }}>
            {/* Form */}
            <Grid size={{ xs: 12, md: 7 }}>
              <ScrollReveal direction="left">
                <Card sx={glassCard}>
                  <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        color: "#0f172a",
                        mb: 4,
                        fontSize: { xs: "1.5rem", md: "1.8rem" },
                      }}
                    >
                      {tr(text.formTitle)}
                    </Typography>

                    {submitted ? (
                      <Box>
                        <Alert
                          severity="success"
                          sx={{
                            background: "rgba(22,163,74,0.07)",
                            border: "1px solid rgba(22,163,74,0.2)",
                            color: "#15803d",
                            borderRadius: "12px",
                            "& .MuiAlert-icon": { color: "#16a34a" },
                          }}
                        >
                          {tr(text.thanks)}
                        </Alert>
                        <Button
                          onClick={() => {
                            shownAt.current = Date.now();
                            setSubmitted(false);
                          }}
                          sx={{ mt: 2, textTransform: "none" }}
                        >
                          {tr(text.sendAnother)}
                        </Button>
                      </Box>
                    ) : (
                      <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit(onSubmit)}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 2.5,
                          position: "relative",
                        }}
                      >
                        {notice && (
                          <Alert
                            severity={notice === "sendFailed" ? "error" : "info"}
                            sx={{ borderRadius: "12px" }}
                          >
                            {tr(text[notice])}
                          </Alert>
                        )}
                        {/* Honeypot: bots that fill every input in the HTML fill this too. It must be
                            display:none, not just moved off-screen: browsers autofill any field that's
                            rendered, which made real visitors look like bots. */}
                        <Box aria-hidden="true" sx={{ display: "none" }}>
                          <input
                            type="text"
                            tabIndex={-1}
                            autoComplete="off"
                            data-lpignore="true"
                            data-1p-ignore
                            {...register("hpTrap")}
                          />
                        </Box>
                        <Grid container spacing={2.5}>
                          <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                              fullWidth
                              label={tr(text.name)}
                              required
                              autoComplete="name"
                              slotProps={{ htmlInput: { maxLength: LIMITS.name.max } }}
                              {...field("name")}
                              sx={inputSx}
                            />
                          </Grid>
                          <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                              fullWidth
                              label={tr(text.email)}
                              type="email"
                              required
                              autoComplete="email"
                              slotProps={{ htmlInput: { maxLength: LIMITS.email.max } }}
                              {...field("email")}
                              sx={inputSx}
                            />
                          </Grid>
                        </Grid>
                        <Grid container spacing={2.5}>
                          <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                              fullWidth
                              label={tr(text.phone)}
                              type="tel"
                              autoComplete="tel"
                              slotProps={{ htmlInput: { maxLength: 20, inputMode: "tel" } }}
                              {...field("phone")}
                              sx={inputSx}
                            />
                          </Grid>
                          <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                              fullWidth
                              label={tr(text.subject)}
                              required
                              slotProps={{ htmlInput: { maxLength: LIMITS.subject.max } }}
                              {...field("subject")}
                              sx={inputSx}
                            />
                          </Grid>
                        </Grid>
                        <TextField
                          fullWidth
                          label={tr(text.message)}
                          multiline
                          rows={5}
                          required
                          slotProps={{ htmlInput: { maxLength: LIMITS.message.max } }}
                          {...field("message")}
                          sx={inputSx}
                        />
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          disabled={isSubmitting}
                          endIcon={<SendIcon />}
                          sx={{ alignSelf: "flex-start", px: 4 }}
                        >
                          {tr(isSubmitting ? text.sending : text.send)}
                        </Button>
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </ScrollReveal>
            </Grid>

            {/* Contact Info */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                {info.map(({ Icon, label, value, multiline, bg, color }, i) => (
                  <ScrollReveal key={label.en} direction="right" delay={i * 0.1}>
                    <Card
                      sx={{
                        ...glassCard,
                        "&:hover": {
                          background: "rgba(255,255,255,0.8)",
                          border: "1px solid rgba(29,78,216,0.2)",
                          boxShadow: "0 12px 36px rgba(29,78,216,0.12)",
                          transform: "translateY(-4px)",
                        },
                        transition: "all 0.35s ease",
                      }}
                    >
                      <CardContent
                        sx={{
                          p: 3,
                          display: "flex",
                          gap: 2.5,
                          alignItems: multiline ? "flex-start" : "center",
                        }}
                      >
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: "13px",
                            background: bg,
                            border: `1px solid ${color}20`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            boxShadow: `0 4px 12px ${color}15`,
                          }}
                        >
                          <Icon sx={{ fontSize: 22, color }} />
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              color,
                              fontSize: "0.72rem",
                              fontWeight: 700,
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              mb: 0.5,
                            }}
                          >
                            {tr(label)}
                          </Typography>
                          <Typography
                            sx={{
                              color: "#334155",
                              lineHeight: 1.7,
                              fontSize: "0.92rem",
                              whiteSpace: "pre-line",
                            }}
                          >
                            {tr(value)}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
