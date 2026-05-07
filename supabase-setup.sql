-- טבלת פרופילים מורחבת
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  rank TEXT,
  style TEXT,
  plan TEXT DEFAULT 'חינמי',
  avatar TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- אפשר Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- כל משתמש יכול לראות רק את הפרופיל שלו
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

-- כל משתמש יכול לעדכן רק את הפרופיל שלו
CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- כל משתמש יכול ליצור את הפרופיל שלו
CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- פונקציה שיוצרת פרופיל אוטומטית בהרשמה
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, first_name, last_name, rank, style, avatar)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'first_name',
    NEW.raw_user_meta_data->>'last_name',
    NEW.raw_user_meta_data->>'rank',
    NEW.raw_user_meta_data->>'style',
    NEW.raw_user_meta_data->>'avatar'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- הפעל את הפונקציה בכל הרשמה חדשה
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();
