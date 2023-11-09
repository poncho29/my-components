export interface RegisterBody {
  fullName:   string;
  dni:        string;
  email:      string;
  password:   string;
  phone:      string;
  address:    string;
  latitude:   string;
  longitude:  string;
  city:       string;
  department: string;
  roles:      string[];
}

export interface RegisterResponse {
  fullName:   string;
  dni:        string;
  email:      string;
  phone:      string;
  address:    string;
  latitude:   string;
  longitude:  string;
  city:       string;
  department: string;
  roles:      string[];
  id:         string;
  isActive:   boolean;
  token:      string;
}