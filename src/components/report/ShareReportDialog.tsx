import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ShareReportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  recruiterName: string;
  recruiterEmail: string;
  recruiterCompany: string;
  recruiterPhone: string;
  onRecruiterNameChange: (value: string) => void;
  onRecruiterEmailChange: (value: string) => void;
  onRecruiterCompanyChange: (value: string) => void;
  onRecruiterPhoneChange: (value: string) => void;
  onShare: () => void;
}

export const ShareReportDialog = ({
  open,
  onOpenChange,
  recruiterName,
  recruiterEmail,
  recruiterCompany,
  recruiterPhone,
  onRecruiterNameChange,
  onRecruiterEmailChange,
  onRecruiterCompanyChange,
  onRecruiterPhoneChange,
  onShare,
}: ShareReportDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Share with Recruiter</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Recruiter Name</Label>
            <Input
              id="name"
              value={recruiterName}
              onChange={(e) => onRecruiterNameChange(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              value={recruiterCompany}
              onChange={(e) => onRecruiterCompanyChange(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={recruiterEmail}
              onChange={(e) => onRecruiterEmailChange(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={recruiterPhone}
              onChange={(e) => onRecruiterPhoneChange(e.target.value)}
            />
          </div>
          <Button onClick={onShare} className="mt-2">Send Report</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};