// ─────────────────────────────────────────────────────────────
// Firebase 설정
//
// Firebase 콘솔(https://console.firebase.google.com) → 프로젝트 설정 →
// "내 앱"의 웹 앱 SDK 구성에서 복사한 값으로 아래 placeholder를 교체하세요.
// (자세한 단계는 FIREBASE_SETUP.md 참고)
// ─────────────────────────────────────────────────────────────
const firebaseConfig = {
  apiKey: "AIzaSyD9CYr94rybmJ9HUO_GWxevooslVNvpuqU",
  authDomain: "wedd-478d6.firebaseapp.com",
  projectId: "wedd-478d6",
  storageBucket: "wedd-478d6.firebasestorage.app",
  messagingSenderId: "1014494032551",
  appId: "1:1014494032551:web:4f5290a7d0c8d0eef86182"
};

firebase.initializeApp(firebaseConfig);

// 각 페이지에서 로드한 SDK만 초기화 (index는 firestore만, admin은 전체)
const db = firebase.firestore();
const auth = firebase.auth ? firebase.auth() : null;
const storage = firebase.storage ? firebase.storage() : null;

// 갤러리 사진 목록을 order 오름차순으로 가져온다. (index/admin 공용)
async function fetchGallery() {
  const snap = await db.collection('gallery').orderBy('order', 'asc').get();
  return snap.docs.map(function (d) {
    return Object.assign({ id: d.id }, d.data());
  });
}
