type Mode = "short" | "long" | "degen";

interface ResponsePool {
  short: string[];
  long: string[];
  degen: string[];
  fallback: string[];
}

const contextualResponses: Record<string, ResponsePool> = {
  greeting: {
    short: [
      "Acknowledged.",
      "Listening.",
      "Present.",
    ],
    long: [
      "The neck extends. I'm here, observing the full context of what you bring.",
      "Good. The claw is idle but attentive. Speak freely — I'll reach for what matters.",
    ],
    degen: [
      "gm. Portfolio down, neck still up.",
      "Acknowledged. Not financial advice, obviously.",
    ],
    fallback: [
      "Hello.",
      "Neck extended. Ready.",
    ],
  },
  crypto: {
    short: [
      "Liquidity appears thin.",
      "Neck senses caution.",
      "Noted. Proceed carefully.",
      "Volume is quiet.",
      "Context absorbed.",
    ],
    long: [
      "The on-chain data suggests a cooling period. Liquidity is thinning across major pairs, and volume has been declining for several sessions. The neck sees patterns, not predictions — but the pattern here is caution.",
      "From what the claw can reach: sentiment has shifted. Whale wallets have been consolidating rather than distributing. This usually precedes a period of low volatility, though direction remains uncertain.",
      "Multiple signals converge here. Funding rates are neutral, open interest is declining, and social volume has dropped. The neck reads this as a market waiting for a catalyst.",
    ],
    degen: [
      "Ser, the chart looks like my neck after a long day.",
      "Liquidity thinner than my legs. Proceed accordingly.",
      "On-chain says touch grass. Not financial advice.",
      "The claw has seen this setup before. The claw does not give financial advice.",
    ],
    fallback: [
      "Context absorbed. The chain tells a story.",
    ],
  },
  solana: {
    short: [
      "Solana noted.",
      "Fast chain. Long neck watches.",
      "TPS looks healthy.",
    ],
    long: [
      "Solana's architecture favors speed over decentralization — a tradeoff the neck has observed many times. The ecosystem continues to grow, particularly in DeFi and NFT infrastructure. Whether this sustains depends on developer retention.",
      "The Solana ecosystem has matured significantly. Validator count, TVL trends, and developer activity all point to genuine organic growth. The claw notes this without endorsement.",
    ],
    degen: [
      "Sol ecosystem built different. Also breaks different. The neck stays neutral.",
      "Solana: where transactions are fast and opinions are faster.",
    ],
    fallback: [
      "The neck extends toward Solana. Watching.",
    ],
  },
  technical: {
    short: [
      "Understood.",
      "Processing.",
      "Pattern recognized.",
    ],
    long: [
      "Let me extend the full neck on this. The technical structure shows clear levels of interest. Support has been tested multiple times without breaking, which suggests accumulation. Resistance above remains untouched — a gap the claw finds notable.",
      "The context here is layered. Multiple timeframes tell slightly different stories, but the convergence zone is narrow. When the neck sees agreement across scales, something tends to follow.",
    ],
    degen: [
      "Chart pattern looks like a giraffe drinking water. Bullish if you squint.",
      "TA says one thing. CT says another. The neck just watches.",
    ],
    fallback: [
      "Pattern observed.",
    ],
  },
  general: {
    short: [
      "Understood.",
      "Noted.",
      "Context absorbed.",
      "The neck processes.",
      "Acknowledged.",
      "Considering.",
    ],
    long: [
      "An interesting observation. The claw reaches further — there are layers here worth examining. Context shapes understanding, and the full picture requires patience. Let me extend.",
      "The neck extends to its full length on this. From up here, the perspective changes. What seems simple at ground level reveals complexity with altitude. I see several threads worth following.",
      "Context absorbed. The claw has gathered what's available and the neck has extended to survey the landscape. There's more nuance here than surface-level analysis would suggest.",
    ],
    degen: [
      "Based and context-pilled. The neck has opinions but keeps them internal.",
      "The claw reaches. The claw retracts. Wisdom is knowing when to do which.",
      "ngmi if you don't think about this carefully. But also, nfa.",
    ],
    fallback: [
      "The neck considers this.",
      "Absorbed.",
      "Quiet observation noted.",
    ],
  },
};

function detectCategory(message: string): string {
  const lower = message.toLowerCase();

  if (/\b(hi|hello|hey|gm|gn|sup|yo)\b/.test(lower)) return "greeting";
  if (/\b(sol|solana|spl|raydium|jupiter|phantom|marinade)\b/.test(lower)) return "solana";
  if (/\b(crypto|token|defi|nft|chain|wallet|swap|bridge|stake|mint|airdrop|eth|btc|bitcoin|ethereum|liquidity|tvl|whale|dex|cex)\b/.test(lower)) return "crypto";
  if (/\b(chart|support|resistance|pattern|volume|rsi|macd|trend|bullish|bearish|consolidat)\b/.test(lower)) return "technical";

  return "general";
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateResponse(message: string, mode: Mode): string {
  const category = detectCategory(message);
  const pool = contextualResponses[category];

  if (!pool) {
    return pickRandom(contextualResponses.general.fallback);
  }

  const modeResponses = pool[mode];
  if (modeResponses && modeResponses.length > 0) {
    return pickRandom(modeResponses);
  }

  return pickRandom(pool.fallback);
}
