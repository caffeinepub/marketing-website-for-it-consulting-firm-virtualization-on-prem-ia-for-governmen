import { useState } from 'react';
import { useGetAllContactInquiries } from '../../hooks/useAdminInquiries';
import AdminRouteGuard from './AdminRouteGuard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Loader2, Mail, Building2, Calendar, MessageSquare, ArrowLeft } from 'lucide-react';
import type { ContactInquiry } from '../../backend';

interface AdminInquiriesPageProps {
  onBackToHome: () => void;
}

export default function AdminInquiriesPage({ onBackToHome }: AdminInquiriesPageProps) {
  const [selectedInquiry, setSelectedInquiry] = useState<ContactInquiry | null>(null);
  const { data: inquiries, isLoading, isError } = useGetAllContactInquiries();

  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1000000);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <AdminRouteGuard>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="ghost" onClick={onBackToHome} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Site
          </Button>
          <h1 className="text-3xl font-bold">Contact Inquiries</h1>
          <p className="text-muted-foreground mt-2">
            Review and manage contact form submissions from potential clients.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Inquiries</CardTitle>
            <CardDescription>
              {inquiries ? `${inquiries.length} total inquiries` : 'Loading inquiries...'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading && (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            )}

            {isError && (
              <div className="text-center py-12">
                <p className="text-destructive">Failed to load inquiries. Please try again.</p>
              </div>
            )}

            {inquiries && inquiries.length === 0 && (
              <div className="text-center py-12">
                <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No inquiries yet.</p>
              </div>
            )}

            {inquiries && inquiries.length > 0 && (
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Organization</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Submitted</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {inquiries.map((inquiry) => (
                      <TableRow key={Number(inquiry.id)} className="cursor-pointer hover:bg-muted/50">
                        <TableCell className="font-medium">{inquiry.name}</TableCell>
                        <TableCell>{inquiry.organization}</TableCell>
                        <TableCell>
                          <a
                            href={`mailto:${inquiry.email}`}
                            className="text-primary hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {inquiry.email}
                          </a>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          {formatDate(inquiry.submittedAt)}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedInquiry(inquiry)}
                          >
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Detail Dialog */}
        <Dialog open={!!selectedInquiry} onOpenChange={() => setSelectedInquiry(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Inquiry Details</DialogTitle>
              <DialogDescription>
                Submitted on {selectedInquiry && formatDate(selectedInquiry.submittedAt)}
              </DialogDescription>
            </DialogHeader>
            {selectedInquiry && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-sm font-medium mb-1">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      Name
                    </div>
                    <p className="text-sm">{selectedInquiry.name}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-sm font-medium mb-1">
                      <Building2 className="h-4 w-4 text-muted-foreground" />
                      Organization
                    </div>
                    <p className="text-sm">{selectedInquiry.organization}</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-sm font-medium mb-1">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    Email
                  </div>
                  <a
                    href={`mailto:${selectedInquiry.email}`}
                    className="text-sm text-primary hover:underline"
                  >
                    {selectedInquiry.email}
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-sm font-medium mb-1">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    Submitted
                  </div>
                  <p className="text-sm">{formatDate(selectedInquiry.submittedAt)}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-sm font-medium mb-2">
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    Message
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm whitespace-pre-wrap">{selectedInquiry.message}</p>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t">
                  <Button variant="outline" onClick={() => setSelectedInquiry(null)}>
                    Close
                  </Button>
                  <Button asChild>
                    <a href={`mailto:${selectedInquiry.email}`}>
                      <Mail className="h-4 w-4 mr-2" />
                      Reply via Email
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </AdminRouteGuard>
  );
}
