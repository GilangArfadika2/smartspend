const testData = [
    {
        category: "KESIAPAN USIA",
        questions: [
            {
                id: "KU1",
                question: "Berusia ≥ 25 tahun",
                options: ["Ya", "Tidak"]
            }
        ]
    },
]

const questionnaireData = [
    {
        category: "KESIAPAN USIA",
        questions: [
            {
                id: "KU1",
                question: "Berusia ≥ 25 tahun",
                options: ["Ya", "Tidak"]
            }
        ]
    },
    {
        category: "KESIAPAN FISIK",
        questions: [
            {
                id: "KF1",
                question: "Memiliki riwayat penyakit (darah rendah, darah tinggi, hepatitis, penyakit kelamin)",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KF2",
                question: "Secara fisik, saya sudah siap bekerja menghasilkan uang untuk memenuhi kebutuhan keluarga",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KF3",
                question: "Secara fisik, saya sudah siap mengerjakan pekerjaan di dalam rumah (mengasuh anak, memasak, mencuci)",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KF4",
                question: "Siap melakukan hubungan seksual",
                options: ["Ya", "Tidak"]
            }
        ]
    },
    {
        category: "KESIAPAN FINANSIAL",
        questions: [
            {
                id: "KF5",
                question: "Memiliki pendapatan tetap",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KF6",
                question: "Mandiri dalam hal keuangan (tidak membebani orang tua atau anggota keluarga lain)",
                options: ["Ya", "Tidak"]
            }
        ]
    },
    {
        category: "KESIAPAN MENTAL",
        questions: [
            {
                id: "KM1",
                question: "Siap menghadapi kekurangan pasangan yang tidak sesuai",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KM2",
                question: "Berdiskusi jika pasangan memiliki kebiasaan yang jelek/tidak umum",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KM3",
                question: "Siap mendapatkan pasangan dari kelas ekonomi yang berbeda",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KM4",
                question: "Siap menjalani kehidupan keluarga yang tidak sesuai harapan",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KM5",
                question: "Siap menjadi orang tua yang memberikan teladan bagi anak-anak yang dilahirkan",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KM6",
                question: "Siap menerima anak dengan kondisi yang tidak diharapkan",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KM7",
                question: "Siap melaksanakan pengasuhan anak di era digital",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KM8",
                question: "Siap menghadapi sikap dan perlakuan yang tidak baik dari keluarga besar",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KM9",
                question: "Sudah memiliki perencanaan kehidupan setelah menikah",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KM10",
                question: "Siap menjalani pola hidup yang berubah setelah menikah",
                options: ["Ya", "Tidak"]
            }
        ]
    },
    {
        category: "KESIAPAN EMOSI",
        questions: [
            {
                id: "KE1",
                question: "Marah atau berteriak jika saya merasa kesal dengan beban pekerjaan",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KE2",
                question: "Berteriak atau melempar barang atau menggerutu jika saya marah",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KE3",
                question: "Mudah tersinggung jika ada ucapan yang tidak berkenan di hati",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KE4",
                question: "Membalas kemarahan jika pasangan saya marah",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KE5",
                question: "Mampu memutuskan sendiri apa yang saya butuhkan",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KE6",
                question: "Mampu menyelesaikan masalah secara cepat dan tepat",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KE7",
                question: "Mengalihkan pembicaraan jika lawan bicara berbeda pendapat",
                options: ["Ya", "Tidak"]
            }
        ]
    },
    {
        category: "KESIAPAN SOSIAL",
        questions: [
            {
                id: "KS1",
                question: "Mudah menyesuaikan dengan berbagai kondisi lingkungan dan pertemanan",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KS2",
                question: "Berpartisipasi dalam kegiatan organisasi dan kemasyarakatan",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KS3",
                question: "Dapat bergaul dengan teman-teman pasangan",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KS4",
                question: "Menyapa lebih dahulu jika ketemu dengan orang yang dikenal",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KS5",
                question: "Mengesampingkan kepentingan pribadi untuk mencapai kepentingan bersama",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KS6",
                question: "Selalu menolong orang meskipun orang tersebut tidak menyukai saya",
                options: ["Ya", "Tidak"]
            }
        ]
    },
    {
        category: "KESIAPAN MORAL",
        questions: [
            {
                id: "KMR1",
                question: "Menaati perintah Tuhan YME sesuai ajaran agama",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KMR2",
                question: "Jujur dalam ucapan dan tindakan",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KMR3",
                question: "Mampu menyimpan rahasia",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KMR4",
                question: "Bersabar dalam menghadapi cobaan hidup",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KMR5",
                question: "Tidak menggunakan barang milik orang lain tanpa ijin",
                options: ["Ya", "Tidak"]
            }
        ]
    },
    {
        category: "KESIAPAN INTERPERSONAL",
        questions: [
            {
                id: "KI1",
                question: "Menjadi pendengar yang baik pada saat orang bercerita/curhat",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KI2",
                question: "Memiliki hubungan yang baik dengan semua orang dari berbagai umur dan tingkat sosial ekonomi",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KI3",
                question: "Berbicara jujur meskipun yang dibicarakan menyakitkan",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KI4",
                question: "Berdiskusi dengan pasangan untuk perencanaan keluarga",
                options: ["Ya", "Tidak"]
            }
        ]
    },
    {
        category: "KETERAMPILAN HIDUP",
        questions: [
            {
                id: "KH1",
                question: "Belajar memasak",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KH2",
                question: "Mengetahui cara mengasuh dan merawat anak",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KH3",
                question: "Mengetahui peran dan tanggungjawab sebagai isteri atau suami",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KH4",
                question: "Memiliki tugas yang harus dilakukan di rumah (memasak, mengasuh, membersihkan rumah, mencuci, main warnet, dan lain-lain)",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KH5",
                question: "Mampu mengatur waktu dalam kehidupan sehari-hari",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KH6",
                question: "Mengetahui cara perawatan kesehatan reproduksi",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KH7",
                question: "Mengetahui alat-alat kontrasepsi untuk pengaturan jarak kelahiran",
                options: ["Ya", "Tidak"]
            }
        ]
    },
    {
        category: "KESIAPAN INTELEKTUAL",
        questions: [
            {
                id: "KI5",
                question: "Saya sudah mencari informasi pengasuhan anak",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KI6",
                question: "Saya sudah mencari informasi tentang pemenuhan kebutuhan keluarga",
                options: ["Ya", "Tidak"]
            },
            {
                id: "KI7",
                question: "Saya sudah mencari informasi tentang cara menjaga hubungan yang baik dengan pasangan",
                options: ["Ya", "Tidak"]
            }
        ]
    }
];
