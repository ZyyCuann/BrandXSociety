export const customerSteps = [
  {
    id: 1,
    title: "Create Identity & Path Selection",
    subTitle: "Pilih jalur kreator & buat handle unik",
    tag: "Onboarding",
    phase: "Phase 1: Identity & Social Proof",
    phoneUI: `
      <div style="padding:24px; display:flex; flex-direction:column; gap:20px;">
        <div style="text-align:center; margin-top:20px;">
          <div style="width:60px; height:60px; background:linear-gradient(135deg, #FF5A45, #635BFF); border-radius:18px; margin:0 auto 12px; display:flex; align-items:center; justify-content:center; color:white; font-weight:800; font-size:24px;">BxS</div>
          <h3 style="font-size:20px; font-weight:800; color:white;">Bangun AI Resume</h3>
          <p style="font-size:12px; color:#9E9EA9; margin-top:4px;">Transformasi jejak digital menjadi portfolio terverifikasi.</p>
        </div>
        
        <div style="background:#18181C; border:1px solid rgba(255,255,255,0.1); border-radius:14px; padding:16px; display:flex; flex-direction:column; gap:12px;">
          <label style="font-size:11px; font-weight:700; color:#9E9EA9; text-transform:uppercase;">Pilih Kategori Kreator</label>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
            <div style="background:rgba(255,90,69,0.15); border:1px solid #FF5A45; border-radius:10px; padding:10px; text-align:center; color:white; font-size:12px; font-weight:700;">Nano / UGC</div>
            <div style="background:#222228; border:1px solid rgba(255,255,255,0.08); border-radius:10px; padding:10px; text-align:center; color:#9E9EA9; font-size:12px; font-weight:600;">Macro / Pro</div>
          </div>
        </div>

        <div style="background:#18181C; border:1px solid rgba(255,255,255,0.1); border-radius:14px; padding:16px;">
          <label style="font-size:11px; font-weight:700; color:#9E9EA9; text-transform:uppercase;">Claim Unique Link</label>
          <div style="display:flex; background:#0F0F12; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:10px; margin-top:6px; align-items:center;">
            <span style="color:#6E6E7A; font-size:12px; font-weight:600;">bxs.id/</span>
            <input type="text" value="alexa_vibe" readonly style="background:transparent; border:none; color:#FF5A45; font-weight:700; font-size:13px; outline:none; flex:1;">
            <span style="color:#10B981; font-size:10px; font-weight:700; background:rgba(16,185,129,0.15); padding:2px 6px; border-radius:4px;">AVAILABLE</span>
          </div>
        </div>

        <button style="background:#FF5A45; color:white; border:none; padding:14px; border-radius:12px; font-weight:700; font-size:14px; cursor:pointer; margin-top:10px;">Lanjut ke Hubungkan Media Sosial →</button>
      </div>
    `,
    telemetry: {
      stage: "STAGE 1: ACCOUNT INIT",
      score: "N/A",
      escrow: "$0.00",
      logs: [
        { ts: "19:43:01", key: "action", val: "INIT_CREATOR_SESSION" },
        { ts: "19:43:01", key: "handle", str: "alexa_vibe" },
        { ts: "19:43:02", key: "status", val: "HANDLE_VERIFIED_AVAILABLE" }
      ]
    }
  },
  {
    id: 2,
    title: "Connect Social Media Accounts",
    subTitle: "Integrasi Instagram Graph & TikTok API",
    tag: "OAuth API",
    phase: "Phase 1: Identity & Social Proof",
    phoneUI: `
      <div style="padding:24px; display:flex; flex-direction:column; gap:16px;">
        <h3 style="font-size:18px; font-weight:800; color:white;">Hubungkan Akun</h3>
        <p style="font-size:12px; color:#9E9EA9;">Kami menggunakan OAuth resmi API Meta & TikTok tanpa menyimpan kata sandi.</p>

        <div style="background:#18181C; border:1px solid #10B981; border-radius:14px; padding:16px; display:flex; align-items:center; justify-content:space-between;">
          <div style="display:flex; align-items:center; gap:12px;">
            <div style="width:40px; height:40px; background:linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); border-radius:10px; display:flex; align-items:center; justify-content:center; color:white; font-weight:800;">IG</div>
            <div>
              <div style="font-weight:700; color:white; font-size:13px;">Instagram Business</div>
              <div style="font-size:11px; color:#10B981; font-weight:600;">Terhubung • @alexa_lifestyle (240K)</div>
            </div>
          </div>
          <span style="color:#10B981; font-size:16px;">✓</span>
        </div>

        <div style="background:#18181C; border:1px solid #10B981; border-radius:14px; padding:16px; display:flex; align-items:center; justify-content:space-between;">
          <div style="display:flex; align-items:center; gap:12px;">
            <div style="width:40px; height:40px; background:#000; border:1px solid rgba(255,255,255,0.2); border-radius:10px; display:flex; align-items:center; justify-content:center; color:white; font-weight:800;">TT</div>
            <div>
              <div style="font-weight:700; color:white; font-size:13px;">TikTok Creator Portal</div>
              <div style="font-size:11px; color:#10B981; font-weight:600;">Terhubung • @alexa_tok (410K)</div>
            </div>
          </div>
          <span style="color:#10B981; font-size:16px;">✓</span>
        </div>

        <div style="background:#141418; border:1px dashed rgba(255,255,255,0.15); border-radius:14px; padding:16px; text-align:center;">
          <div style="font-size:12px; color:#6E6E7A; font-weight:600;">+ Hubungkan YouTube / X</div>
        </div>

        <div style="background:rgba(16,185,129,0.1); border:1px solid rgba(16,185,129,0.3); border-radius:10px; padding:12px; font-size:11px; color:#10B981; display:flex; align-items:center; gap:8px;">
          <span>⚡ API Graph v19.0: Auto-Syncing 1,420 Media Posts...</span>
        </div>
      </div>
    `,
    telemetry: {
      stage: "STAGE 2: OAUTH HANDSHAKE",
      score: "92.1%",
      escrow: "$0.00",
      logs: [
        { ts: "19:43:05", key: "oauth_ig", val: "META_GRAPH_SUCCESS_200" },
        { ts: "19:43:06", key: "followers", str: "240,120 verified" },
        { ts: "19:43:06", key: "oauth_tt", val: "TIKTOK_CREATOR_API_200" }
      ]
    }
  },
  {
    id: 3,
    title: "AI Builds Digital Resume",
    subTitle: "Ekstraksi estetika & analisis demografi audience",
    tag: "AI Vectoring",
    phase: "Phase 1: Identity & Social Proof",
    phoneUI: `
      <div style="padding:24px; display:flex; flex-direction:column; gap:16px;">
        <div style="background:linear-gradient(135deg, rgba(255,90,69,0.15), rgba(99,91,255,0.15)); border:1px solid #FF5A45; border-radius:16px; padding:20px; text-align:center;">
          <div style="font-size:11px; font-weight:700; color:#FF5A45; text-transform:uppercase; letter-spacing:0.05em;">AI Vector Processing Engine</div>
          <h3 style="font-size:22px; font-weight:800; color:white; margin:8px 0;">Menganalisis Content Style</h3>
          <p style="font-size:12px; color:#9E9EA9;">Pemrosesan 420 Reels & Engagement Matrix...</p>
          
          <div style="height:6px; background:#222; border-radius:3px; margin:16px 0; overflow:hidden;">
            <div style="width:85%; height:100%; background:linear-gradient(90deg, #FF5A45, #635BFF);"></div>
          </div>
        </div>

        <div style="background:#18181C; border:1px solid rgba(255,255,255,0.1); border-radius:14px; padding:16px; display:flex; flex-direction:column; gap:10px;">
          <div style="display:flex; justify-content:space-between; font-size:12px;">
            <span style="color:#9E9EA9;">Aesthetic Tag:</span>
            <span style="color:white; font-weight:700;">Warm Minimalist / Fashion</span>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:12px;">
            <span style="color:#9E9EA9;">Audience Gender:</span>
            <span style="color:#FF5A45; font-weight:700;">68% Female (18-24 y/o)</span>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:12px;">
            <span style="color:#9E9EA9;">Authenticity Score:</span>
            <span style="color:#10B981; font-weight:700;">99.2% Real Human Audience</span>
          </div>
        </div>
      </div>
    `,
    telemetry: {
      stage: "STAGE 3: VECTOR EXTRACTION",
      score: "96.8%",
      escrow: "$0.00",
      logs: [
        { ts: "19:43:10", key: "ai_model", str: "BrandxVision-v4" },
        { ts: "19:43:11", key: "embeddings", val: "VECTOR_512_DIM_GENERATED" },
        { ts: "19:43:11", key: "niche", str: "Beauty, Fashion, Travel" }
      ]
    }
  },
  {
    id: 4,
    title: "Review Identity Card",
    subTitle: "Pratinjau skor reputasi & rekomendasi rate post",
    tag: "Score Audit",
    phase: "Phase 1: Identity & Social Proof",
    phoneUI: `
      <div style="padding:20px; display:flex; flex-direction:column; gap:14px;">
        <div style="background:#18181C; border:1px solid rgba(255,255,255,0.12); border-radius:16px; overflow:hidden;">
          <div style="height:90px; background:url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80') center/cover; position:relative;">
            <div style="position:absolute; bottom:-20px; left:16px; width:52px; height:52px; border-radius:50%; border:3px solid #18181C; overflow:hidden;">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80" style="width:100%; height:100%; object-fit:cover;">
            </div>
          </div>
          <div style="padding:24px 16px 16px 16px; display:flex; flex-direction:column; gap:10px;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <div>
                <h4 style="font-size:16px; font-weight:800; color:white;">Alexa Jenkins <span style="color:#635BFF;">✓</span></h4>
                <span style="font-size:11px; color:#9E9EA9;">@alexa_lifestyle • NYC, USA</span>
              </div>
              <div style="background:rgba(255,90,69,0.15); border:1px solid #FF5A45; border-radius:8px; padding:4px 8px; text-align:right;">
                <div style="font-size:9px; color:#FF5A45; font-weight:700;">IDENTITY SCORE</div>
                <div style="font-size:16px; font-weight:800; color:white;">96<span style="font-size:10px; color:#9E9EA9;">/100</span></div>
              </div>
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:6px; background:#0F0F12; padding:10px; border-radius:10px; text-align:center;">
              <div>
                <div style="font-size:10px; color:#6E6E7A;">Followers</div>
                <div style="font-size:13px; font-weight:700; color:white;">650K</div>
              </div>
              <div>
                <div style="font-size:10px; color:#6E6E7A;">Avg ER</div>
                <div style="font-size:13px; font-weight:700; color:#10B981;">5.4%</div>
              </div>
              <div>
                <div style="font-size:10px; color:#6E6E7A;">Rec. Rate</div>
                <div style="font-size:13px; font-weight:700; color:#FF5A45;">$650/post</div>
              </div>
            </div>
          </div>
        </div>
        
        <button style="background:#10B981; color:white; border:none; padding:12px; border-radius:10px; font-weight:700; font-size:13px;">Konfirmasi & Publish Digital Resume →</button>
      </div>
    `,
    telemetry: {
      stage: "STAGE 4: PROFILE VERIFIED",
      score: "96.0%",
      escrow: "$0.00",
      logs: [
        { ts: "19:43:15", key: "audit", val: "PROFILE_AUDIT_PASSED" },
        { ts: "19:43:15", key: "rec_rate", str: "$650 USD / reel" },
        { ts: "19:43:16", key: "badge", val: "TIER_1_TOP_CREATOR" }
      ]
    }
  },
  {
    id: 5,
    title: "Publish Profile & Live Link",
    subTitle: "Generate link publik bxs.id/alexa",
    tag: "Public Link",
    phase: "Phase 2: Matching & Opportunity",
    phoneUI: `
      <div style="padding:24px; display:flex; flex-direction:column; gap:16px; text-align:center;">
        <div style="width:64px; height:64px; background:rgba(16,185,129,0.15); border:2px solid #10B981; border-radius:50%; margin:10px auto; display:flex; align-items:center; justify-content:center; color:#10B981; font-size:28px;">✓</div>
        <h3 style="font-size:20px; font-weight:800; color:white;">Identity Is Live!</h3>
        <p style="font-size:12px; color:#9E9EA9;">Resume AI Anda dapat diakses oleh ribuan brand terverifikasi.</p>

        <div style="background:#18181C; border:1px solid rgba(255,255,255,0.1); border-radius:14px; padding:16px;">
          <div style="font-size:11px; color:#6E6E7A; font-weight:700;">YOUR UNIQUE PROFILE LINK</div>
          <div style="font-size:15px; font-weight:800; color:#FF5A45; margin:6px 0;">https://bxs.id/alexa_vibe</div>
          <button style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.15); color:white; padding:8px 16px; border-radius:8px; font-size:12px; font-weight:600; cursor:pointer;">Copy Link to Bio</button>
        </div>
      </div>
    `,
    telemetry: {
      stage: "STAGE 5: PROFILE PUBLISHED",
      score: "96.0%",
      escrow: "$0.00",
      logs: [
        { ts: "19:43:20", key: "status", val: "PUBLISHED_PUBLIC" },
        { ts: "19:43:20", key: "url", str: "https://bxs.id/alexa_vibe" }
      ]
    }
  },
  {
    id: 6,
    title: "Find Matching Opportunity",
    subTitle: "Eksplorasi campaign brand sesuai AI match",
    tag: "Collabstr Feed",
    phase: "Phase 2: Matching & Opportunity",
    phoneUI: `
      <div style="padding:16px; display:flex; flex-direction:column; gap:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h4 style="font-size:15px; font-weight:800; color:white;">Rekomendasi Campaign</h4>
          <span style="font-size:11px; color:#FF5A45; font-weight:700;">98% AI Match</span>
        </div>

        <div style="background:#18181C; border:1px solid rgba(255,255,255,0.12); border-radius:14px; padding:14px; display:flex; flex-direction:column; gap:10px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div style="display:flex; align-items:center; gap:10px;">
              <div style="width:36px; height:36px; background:#fff; border-radius:8px; display:flex; align-items:center; justify-content:center; font-weight:900; color:black; font-size:12px;">NIKE</div>
              <div>
                <div style="font-weight:700; color:white; font-size:13px;">Nike Air Max Launch</div>
                <div style="font-size:10px; color:#9E9EA9;">UGC Instagram Reel + Story</div>
              </div>
            </div>
            <span style="color:#10B981; font-size:14px; font-weight:800;">$650</span>
          </div>
          <p style="font-size:11px; color:#9E9EA9; line-height:1.4;">Membutuhkan 5 kreator fashion/lifestyle untuk memamerkan Nike Air Max terbaru dalam konsep video 30 detik aesthetic.</p>
          <button style="background:#FF5A45; color:white; border:none; padding:10px; border-radius:8px; font-weight:700; font-size:12px; cursor:pointer;">Apply Campaign Sekarang →</button>
        </div>

        <div style="background:#18181C; border:1px solid rgba(255,255,255,0.08); border-radius:14px; padding:14px; display:flex; justify-content:space-between; align-items:center;">
          <div style="display:flex; align-items:center; gap:10px;">
            <div style="width:36px; height:36px; background:#FF4081; border-radius:8px; display:flex; align-items:center; justify-content:center; font-weight:900; color:white; font-size:11px;">SPH</div>
            <div>
              <div style="font-weight:700; color:white; font-size:13px;">Sephora Summer Glow</div>
              <div style="font-size:10px; color:#9E9EA9;">TikTok Video Review</div>
            </div>
          </div>
          <span style="color:#10B981; font-size:14px; font-weight:800;">$450</span>
        </div>
      </div>
    `,
    telemetry: {
      stage: "STAGE 6: MATCHMAKING SEARCH",
      score: "98.4%",
      escrow: "$650.00",
      logs: [
        { ts: "19:43:25", key: "query", str: "niche=fashion, min_rate=400" },
        { ts: "19:43:25", key: "matches_found", val: "14_CAMPAIGNS_ACTIVE" }
      ]
    }
  },
  {
    id: 7,
    title: "Apply Campaign",
    subTitle: "Pengiriman pitch & penguncian nilai $650",
    tag: "Application",
    phase: "Phase 2: Matching & Opportunity",
    phoneUI: `
      <div style="padding:20px; display:flex; flex-direction:column; gap:14px;">
        <h3 style="font-size:16px; font-weight:800; color:white;">Pengajuan Pitch Campaign</h3>

        <div style="background:#18181C; border:1px solid rgba(255,255,255,0.1); border-radius:12px; padding:14px; display:flex; flex-direction:column; gap:8px;">
          <label style="font-size:10px; font-weight:700; color:#6E6E7A; text-transform:uppercase;">Proposed Rate</label>
          <div style="font-size:18px; font-weight:800; color:#10B981;">$650.00 USD <span style="font-size:11px; color:#9E9EA9; font-weight:400;">(Fix Escrow)</span></div>
        </div>

        <div style="background:#18181C; border:1px solid rgba(255,255,255,0.1); border-radius:12px; padding:14px; display:flex; flex-direction:column; gap:8px;">
          <label style="font-size:10px; font-weight:700; color:#6E6E7A; text-transform:uppercase;">AI Generated Pitch</label>
          <p style="font-size:11px; color:#9E9EA9; line-height:1.5;">"Halo tim Nike! Dengan 68% audience wanita muda berusia 18-24 di NYC, konten visual minimalis saya sangat cocok untuk mempromosikan Nike Air Max..."</p>
        </div>

        <button style="background:#635BFF; color:white; border:none; padding:12px; border-radius:10px; font-weight:700; font-size:13px; cursor:pointer;">Kirim Lamaran ke Brand →</button>
      </div>
    `,
    telemetry: {
      stage: "STAGE 7: APPLICATION SENT",
      score: "98.4%",
      escrow: "$650.00",
      logs: [
        { ts: "19:43:30", key: "pitch_status", val: "PITCH_SUBMITTED_200" },
        { ts: "19:43:31", key: "escrow_reserve", val: "LOCK_REQUESTED_$650" }
      ]
    }
  },
  {
    id: 8,
    title: "Complete Task & Upload Content",
    subTitle: "Unggah draft konten untuk verifikasi AI",
    tag: "Deliverable Studio",
    phase: "Phase 3: Verification & Payout",
    phoneUI: `
      <div style="padding:20px; display:flex; flex-direction:column; gap:14px;">
        <h3 style="font-size:16px; font-weight:800; color:white;">Deliverables Studio</h3>

        <div style="background:#18181C; border:1px solid rgba(255,255,255,0.1); border-radius:12px; padding:14px; display:flex; flex-direction:column; gap:10px;">
          <div style="height:120px; background:url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80') center/cover; border-radius:8px; display:flex; align-items:center; justify-content:center; position:relative;">
            <div style="width:40px; height:40px; background:rgba(0,0,0,0.6); border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:18px;">▶</div>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:12px; color:white; font-weight:700;">nike_airmax_draft_v1.mp4</span>
            <span style="font-size:10px; color:#10B981; background:rgba(16,185,129,0.15); padding:2px 6px; border-radius:4px; font-weight:700;">AI COMPLIANT 100%</span>
          </div>
        </div>

        <button style="background:#10B981; color:white; border:none; padding:12px; border-radius:10px; font-weight:700; font-size:13px; cursor:pointer;">Submit Draft untuk Brand Review →</button>
      </div>
    `,
    telemetry: {
      stage: "STAGE 8: CONTENT SUBMITTED",
      score: "99.0%",
      escrow: "$650.00",
      logs: [
        { ts: "19:43:35", key: "video_check", val: "RESOLUTION_1080X1920_OK" },
        { ts: "19:43:36", key: "hashtag_check", val: "#NIKEAIR_VERIFIED" }
      ]
    }
  },
  {
    id: 9,
    title: "Receive Payment via Escrow",
    subTitle: "Pelepasan otomatis dana $650 ke Stripe",
    tag: "Instant Payout",
    phase: "Phase 3: Verification & Payout",
    phoneUI: `
      <div style="padding:24px; display:flex; flex-direction:column; gap:16px; text-align:center;">
        <div style="width:64px; height:64px; background:rgba(16,185,129,0.15); border:2px solid #10B981; border-radius:50%; margin:0 auto; display:flex; align-items:center; justify-content:center; color:#10B981; font-size:28px;">$</div>
        <h3 style="font-size:20px; font-weight:800; color:white;">Payout Released!</h3>
        
        <div style="background:#18181C; border:1px solid #10B981; border-radius:14px; padding:20px;">
          <div style="font-size:11px; color:#9E9EA9;">TOTAL DITERIMA (STRIPE ESCROW)</div>
          <div style="font-size:28px; font-weight:800; color:#10B981; margin:6px 0;">+$650.00 USD</div>
          <div style="font-size:11px; color:#6E6E7A;">Transaction Tx #89234 • No Platform Fee</div>
        </div>

        <button style="background:#10B981; color:white; border:none; padding:12px; border-radius:10px; font-weight:700; font-size:13px;">Transfer ke Rekening Bank →</button>
      </div>
    `,
    telemetry: {
      stage: "STAGE 9: ESCROW RELEASED",
      score: "100%",
      escrow: "$0.00 (Paid)",
      logs: [
        { ts: "19:43:40", key: "stripe_payout", val: "SETTLEMENT_SUCCESS_200" },
        { ts: "19:43:40", key: "escrow_status", val: "RELEASED_TO_CREATOR" }
      ]
    }
  },
  {
    id: 10,
    title: "Build Reputation & Level Up",
    subTitle: "Peningkatan level reputasi & ulasan 5-star",
    tag: "Reputation Tier",
    phase: "Phase 3: Verification & Payout",
    phoneUI: `
      <div style="padding:20px; display:flex; flex-direction:column; gap:14px;">
        <h3 style="font-size:18px; font-weight:800; color:white;">Reputasi Creator Updated</h3>

        <div style="background:#18181C; border:1px solid rgba(255,255,255,0.1); border-radius:14px; padding:16px; display:flex; flex-direction:column; gap:10px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:13px; font-weight:700; color:white;">Review dari Nike Team</span>
            <span style="color:#F59E0B; font-weight:800;">5.0 ★★★★★</span>
          </div>
          <p style="font-size:11px; color:#9E9EA9; line-height:1.4;">"Kreator sangat profesional, pengiriman cepat, dan estetika video sangat tinggi!"</p>
        </div>

        <div style="background:linear-gradient(135deg, rgba(99,91,255,0.15), rgba(255,90,69,0.15)); border:1px solid #635BFF; border-radius:14px; padding:16px; text-align:center;">
          <div style="font-size:11px; font-weight:700; color:#635BFF;">NEW TIER UNLOCKED</div>
          <div style="font-size:18px; font-weight:800; color:white; margin:4px 0;">Top 1% UGC Creator</div>
          <div style="font-size:11px; color:#9E9EA9;">Membuka akses ke campaign eksklusif senilai >$1,500/post.</div>
        </div>
      </div>
    `,
    telemetry: {
      stage: "STAGE 10: TIER UPGRADED",
      score: "99.8%",
      escrow: "$0.00",
      logs: [
        { ts: "19:43:45", key: "reputation_score", str: "4.98 / 5.0" },
        { ts: "19:43:45", key: "tier", val: "TIER_PRO_UNLOCKED" }
      ]
    }
  }
];

export const brandSteps = [
  {
    id: 1,
    title: "Create Brand Account",
    subTitle: "Verifikasi profil perusahaan & industri",
    tag: "Brand Auth",
    phase: "Phase 1: Campaign Setup",
    phoneUI: `
      <div style="padding:24px; display:flex; flex-direction:column; gap:20px;">
        <div style="text-align:center; margin-top:10px;">
          <div style="width:60px; height:60px; background:#635BFF; border-radius:18px; margin:0 auto 12px; display:flex; align-items:center; justify-content:center; color:white; font-weight:800; font-size:24px;">🏢</div>
          <h3 style="font-size:20px; font-weight:800; color:white;">Portal Perusahaan</h3>
          <p style="font-size:12px; color:#9E9EA9;">Temukan kreator terverifikasi untuk campaign produk Anda.</p>
        </div>

        <div style="background:#18181C; border:1px solid rgba(255,255,255,0.1); border-radius:14px; padding:16px; display:flex; flex-direction:column; gap:10px;">
          <label style="font-size:11px; font-weight:700; color:#9E9EA9;">Nama Brand / Perusahaan</label>
          <input type="text" value="Aesthetic Essentials Inc." readonly style="background:#0F0F12; border:1px solid rgba(255,255,255,0.1); color:white; padding:10px; border-radius:8px; font-weight:600; font-size:13px;">
        </div>

        <button style="background:#635BFF; color:white; border:none; padding:14px; border-radius:12px; font-weight:700; font-size:14px; cursor:pointer;">Buat Account Perusahaan →</button>
      </div>
    `,
    telemetry: {
      stage: "STAGE 1: BRAND VERIFIED",
      score: "100%",
      escrow: "$0.00",
      logs: [
        { ts: "19:43:01", key: "brand_auth", val: "BRAND_SSO_SUCCESS" },
        { ts: "19:43:01", key: "tax_id", str: "US-892342-X" }
      ]
    }
  },
  {
    id: 2,
    title: "Set Campaign Goal",
    subTitle: "Tentukan KPI (UGC Ads / Awareness / Sales)",
    tag: "Goal Setting",
    phase: "Phase 1: Campaign Setup",
    phoneUI: `
      <div style="padding:20px; display:flex; flex-direction:column; gap:14px;">
        <h3 style="font-size:18px; font-weight:800; color:white;">Pilih Tujuan Campaign</h3>

        <div style="background:rgba(99,91,255,0.15); border:1px solid #635BFF; border-radius:14px; padding:16px;">
          <div style="font-weight:700; color:white; font-size:14px;">1. UGC Video Ads</div>
          <div style="font-size:11px; color:#9E9EA9; margin-top:4px;">Konten autentik untuk TikTok & Instagram Meta Ads.</div>
        </div>

        <div style="background:#18181C; border:1px solid rgba(255,255,255,0.08); border-radius:14px; padding:16px;">
          <div style="font-weight:700; color:#9E9EA9; font-size:14px;">2. Influencer Reach & Awareness</div>
          <div style="font-size:11px; color:#6E6E7A; margin-top:4px;">Promosi masif melalui postingan feed & reel.</div>
        </div>
      </div>
    `,
    telemetry: {
      stage: "STAGE 2: GOAL CONFIGURED",
      score: "N/A",
      escrow: "$0.00",
      logs: [
        { ts: "19:43:05", key: "kpi_target", val: "UGC_VIDEO_ADS" }
      ]
    }
  },
  {
    id: 3,
    title: "Create AI Campaign Brief",
    subTitle: "Generate brief otomatis & alokasi budget $5,000",
    tag: "AI Brief Copilot",
    phase: "Phase 1: Campaign Setup",
    phoneUI: `
      <div style="padding:20px; display:flex; flex-direction:column; gap:14px;">
        <h3 style="font-size:16px; font-weight:800; color:white;">AI Brief Copilot</h3>

        <div style="background:#18181C; border:1px solid rgba(255,255,255,0.1); border-radius:14px; padding:14px; display:flex; flex-direction:column; gap:10px;">
          <div style="display:flex; justify-content:space-between;">
            <span style="font-size:12px; color:#9E9EA9;">Total Budget:</span>
            <span style="font-size:14px; font-weight:800; color:#10B981;">$5,000 USD</span>
          </div>
          <div style="display:flex; justify-content:space-between;">
            <span style="font-size:12px; color:#9E9EA9;">Target Kreator:</span>
            <span style="font-size:13px; font-weight:700; color:white;">10 Kreator ($500/kreator)</span>
          </div>
        </div>

        <button style="background:#635BFF; color:white; border:none; padding:12px; border-radius:10px; font-weight:700; font-size:13px;">Generate AI Brief & Launch →</button>
      </div>
    `,
    telemetry: {
      stage: "STAGE 3: BRIEF GENERATED",
      score: "100%",
      escrow: "$5,000.00",
      logs: [
        { ts: "19:43:10", key: "budget_allocated", val: "$5,000_ESCROW_READY" }
      ]
    }
  },
  {
    id: 4,
    title: "Search Creator Identity",
    subTitle: "Filter pencarian Collabstr: Niche, ER, Followers",
    tag: "Collabstr Search",
    phase: "Phase 2: Discovery & Escrow",
    phoneUI: `
      <div style="padding:16px; display:flex; flex-direction:column; gap:12px;">
        <div style="display:flex; gap:6px; overflow-x:auto; padding-bottom:4px;">
          <span style="background:#635BFF; color:white; padding:4px 10px; border-radius:20px; font-size:11px; font-weight:700;">Beauty</span>
          <span style="background:#18181C; border:1px solid rgba(255,255,255,0.1); color:#9E9EA9; padding:4px 10px; border-radius:20px; font-size:11px;">100K-500K</span>
          <span style="background:#18181C; border:1px solid rgba(255,255,255,0.1); color:#9E9EA9; padding:4px 10px; border-radius:20px; font-size:11px;">ER > 4%</span>
        </div>

        <div style="background:#18181C; border:1px solid rgba(255,255,255,0.1); border-radius:12px; padding:12px; display:flex; align-items:center; justify-content:space-between;">
          <div style="display:flex; align-items:center; gap:10px;">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" style="width:40px; height:40px; border-radius:50%; object-fit:cover;">
            <div>
              <div style="font-weight:700; color:white; font-size:13px;">Alexa Jenkins</div>
              <div style="font-size:10px; color:#10B981;">98% AI Match • 650K Follower</div>
            </div>
          </div>
          <span style="font-size:13px; font-weight:800; color:#FF5A45;">$650</span>
        </div>
      </div>
    `,
    telemetry: {
      stage: "STAGE 4: CREATOR SEARCH",
      score: "98.4%",
      escrow: "$5,000.00",
      logs: [
        { ts: "19:43:15", key: "filter_applied", str: "niche=beauty, er_min=4%" }
      ]
    }
  },
  {
    id: 5,
    title: "Match & Shortlist Creator",
    subTitle: "Sorting otomatis berdasarkan affinity score",
    tag: "AI Ranking",
    phase: "Phase 2: Discovery & Escrow",
    phoneUI: `
      <div style="padding:20px; display:flex; flex-direction:column; gap:12px;">
        <h3 style="font-size:16px; font-weight:800; color:white;">AI Shortlist Ranked</h3>

        <div style="background:#18181C; border:1px solid #10B981; border-radius:12px; padding:12px; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <div style="font-weight:700; color:white; font-size:13px;">#1 Alexa Jenkins (98% Match)</div>
            <div style="font-size:10px; color:#9E9EA9;">High Conversion Propensity</div>
          </div>
          <button style="background:#10B981; color:white; border:none; padding:6px 12px; border-radius:6px; font-size:11px; font-weight:700;">Invite →</button>
        </div>
      </div>
    `,
    telemetry: {
      stage: "STAGE 5: SHORTLIST READY",
      score: "98.4%",
      escrow: "$5,000.00",
      logs: [
        { ts: "19:43:20", key: "shortlist_count", val: "5_CREATORS_SELECTED" }
      ]
    }
  },
  {
    id: 6,
    title: "Invite Collaboration & Deposit Escrow",
    subTitle: "Penguncian dana $650 di Stripe Vault",
    tag: "Escrow Deposit",
    phase: "Phase 2: Discovery & Escrow",
    phoneUI: `
      <div style="padding:24px; display:flex; flex-direction:column; gap:16px; text-align:center;">
        <div style="width:60px; height:60px; background:rgba(99,91,255,0.15); border:2px solid #635BFF; border-radius:50%; margin:0 auto; display:flex; align-items:center; justify-content:center; color:#635BFF; font-size:24px;">🔒</div>
        <h3 style="font-size:18px; font-weight:800; color:white;">Lock Escrow Fund</h3>

        <div style="background:#18181C; border:1px solid #635BFF; border-radius:14px; padding:16px;">
          <div style="font-size:11px; color:#9E9EA9;">DANA TERKUNCI DALAM ESCROW</div>
          <div style="font-size:24px; font-weight:800; color:white; margin:4px 0;">$650.00 USD</div>
          <div style="font-size:10px; color:#10B981;">Aman di Stripe Connect Escrow Shield</div>
        </div>
      </div>
    `,
    telemetry: {
      stage: "STAGE 6: ESCROW LOCKED",
      score: "100%",
      escrow: "$650.00 Locked",
      logs: [
        { ts: "19:43:25", key: "escrow_deposit", val: "STRIPE_ESCROW_LOCK_OK" }
      ]
    }
  },
  {
    id: 7,
    title: "Review Content Draft",
    subTitle: "Pratinjau video draft & beri 1-click approval",
    tag: "Review Portal",
    phase: "Phase 3: Execution & Analytics",
    phoneUI: `
      <div style="padding:20px; display:flex; flex-direction:column; gap:14px;">
        <h3 style="font-size:16px; font-weight:800; color:white;">Review Draft Konten</h3>

        <div style="height:120px; background:url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80') center/cover; border-radius:12px; display:flex; align-items:center; justify-content:center;">
          <div style="width:40px; height:40px; background:rgba(0,0,0,0.6); border-radius:50%; display:flex; align-items:center; justify-content:center; color:white;">▶</div>
        </div>

        <button style="background:#10B981; color:white; border:none; padding:12px; border-radius:10px; font-weight:700; font-size:13px; cursor:pointer;">Approve & Release Escrow →</button>
      </div>
    `,
    telemetry: {
      stage: "STAGE 7: CONTENT APPROVED",
      score: "100%",
      escrow: "$650.00",
      logs: [
        { ts: "19:43:30", key: "approval", val: "BRAND_APPROVED_RELEASE" }
      ]
    }
  },
  {
    id: 8,
    title: "Track Performance Analytics",
    subTitle: "Pantau impressions masif 845K & Sales ROAS 4.2x",
    tag: "Live Analytics",
    phase: "Phase 3: Execution & Analytics",
    phoneUI: `
      <div style="padding:20px; display:flex; flex-direction:column; gap:14px;">
        <h3 style="font-size:16px; font-weight:800; color:white;">Live Analytics Dashboard</h3>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
          <div style="background:#18181C; padding:12px; border-radius:10px; text-align:center;">
            <div style="font-size:10px; color:#9E9EA9;">Total Views</div>
            <div style="font-size:18px; font-weight:800; color:white;">845.2K</div>
          </div>
          <div style="background:#18181C; padding:12px; border-radius:10px; text-align:center;">
            <div style="font-size:10px; color:#9E9EA9;">ROAS Sales</div>
            <div style="font-size:18px; font-weight:800; color:#10B981;">4.2x</div>
          </div>
        </div>
      </div>
    `,
    telemetry: {
      stage: "STAGE 8: ANALYTICS ACTIVE",
      score: "100%",
      escrow: "$0.00",
      logs: [
        { ts: "19:43:35", key: "impressions", str: "845,200 views" }
      ]
    }
  },
  {
    id: 9,
    title: "Release Escrow Settlement",
    subTitle: "Penyelesaian finansial otomatis & faktur pajak",
    tag: "Settlement",
    phase: "Phase 3: Execution & Analytics",
    phoneUI: `
      <div style="padding:24px; display:flex; flex-direction:column; gap:16px; text-align:center;">
        <div style="width:60px; height:60px; background:rgba(16,185,129,0.15); border:2px solid #10B981; border-radius:50%; margin:0 auto; display:flex; align-items:center; justify-content:center; color:#10B981; font-size:24px;">✓</div>
        <h3 style="font-size:18px; font-weight:800; color:white;">Settlement Selesai</h3>

        <div style="background:#18181C; border:1px solid rgba(255,255,255,0.1); border-radius:14px; padding:16px;">
          <div style="font-size:11px; color:#9E9EA9;">AUTO TAX INVOICE GENERATED</div>
          <div style="font-size:14px; font-weight:700; color:white; margin-top:4px;">Invoice #INV-2026-8923</div>
        </div>
      </div>
    `,
    telemetry: {
      stage: "STAGE 9: SETTLEMENT COMPLETE",
      score: "100%",
      escrow: "$0.00",
      logs: [
        { ts: "19:43:40", key: "invoice", str: "PDF_GENERATED_INV_8923" }
      ]
    }
  },
  {
    id: 10,
    title: "Scale Partnership & Retainer",
    subTitle: "Retainer bulanan otomatis untuk kreator terbaik",
    tag: "Creator CRM",
    phase: "Phase 3: Execution & Analytics",
    phoneUI: `
      <div style="padding:20px; display:flex; flex-direction:column; gap:14px;">
        <h3 style="font-size:16px; font-weight:800; color:white;">Scale Up Retainer</h3>

        <div style="background:linear-gradient(135deg, rgba(99,91,255,0.2), rgba(16,185,129,0.2)); border:1px solid #635BFF; border-radius:14px; padding:16px;">
          <div style="font-weight:700; color:white; font-size:14px;">Kontrak Retainer 6 Bulan</div>
          <div style="font-size:11px; color:#9E9EA9; margin-top:4px;">Mengunci Alexa Jenkins untuk 4 post/bulan.</div>
        </div>
      </div>
    `,
    telemetry: {
      stage: "STAGE 10: RETAINER LAUNCHED",
      score: "100%",
      escrow: "$2,600.00/mo",
      logs: [
        { ts: "19:43:45", key: "retainer", val: "RETAINER_CONTRACT_ACTIVE" }
      ]
    }
  }
];
