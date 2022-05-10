import { format } from 'date-fns';

export default function formatDate(date) {
  return format(new Date(date), "MM/dd/yyyy, hh:mm aaaaa'm'");
}
