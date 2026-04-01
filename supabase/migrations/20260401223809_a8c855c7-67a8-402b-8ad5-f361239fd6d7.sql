CREATE TABLE public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  country_code text NOT NULL DEFAULT 'US',
  source text NOT NULL DEFAULT 'skills_portal',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON public.leads
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated inserts" ON public.leads
  FOR INSERT TO authenticated
  WITH CHECK (true);