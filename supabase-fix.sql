-- Jalankan sekali kalau saat kirim masih muncul error permission / 42501
grant insert on table public.messages to anon;
grant usage, select on sequence public.messages_id_seq to anon;
